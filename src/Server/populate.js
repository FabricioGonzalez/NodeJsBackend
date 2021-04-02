import { readFile } from 'fs/promises';

export default class Populate {
  constructor({ file }, repository) {
    this.file = file;
    this.repository = repository;
  }
  async #currentFileContent() {
    return JSON.parse(await readFile(this.file));
  }

  async create() {
    const currentFile = await this.#currentFileContent();

    await this.repository.save(currentFile)
  }
}
