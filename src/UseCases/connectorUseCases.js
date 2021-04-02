export default class ConnectorUseCases {
  constructor(Repository) {
    this.repository = Repository;
  }

  save(connector) {
    if (!connector) {
      throw new Error();
    }

    const data = this.repository.save(connector);

    return {
      ok: 'Insert successed',
      id: data._id,
    };
  }

  listAll() {
    const data = this.repository.listAll();

    return data;
  }

  listBy(filter) {
    const data = this.repository.listBy(filter);
    return data;
  }

  update(connector) {
    if (!connector) {
      throw new Error();
    }

    return this.repository.update(connector);
  }

  delete(id) {
    return this.repository.delete(id);
  }
  restore(id) {
    return this.repository.restore(id);
  }
}
