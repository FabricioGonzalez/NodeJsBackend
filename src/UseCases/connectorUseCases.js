export default class ConnectorUseCases {
  constructor(Repository) {
    this.repository = Repository;
  }

  async save(connector) {
    if (!connector) {
      throw new Error();
    }

    const { data } = await this.repository.save(connector);

    return {
      ok: 'Insert successed',
      data,
    };
  }

  async listAll(limit) {
    const data = await this.repository.listAll(limit);

    return data;
  }

  async listBy(filter) {
    const data = await this.repository.listBy(filter);

    return data;
  }

  async update(id, connector) {
    if (!connector) {
      throw new Error();
    }

    return await this.repository.update(id, connector);
  }

  async delete(id) {
    return await this.repository.delete(id);
  }
  async restore(id) {
    return await this.repository.restore(id);
  }
}
