export default class ConnectorService {
  constructor(usecase) {
    this.connectorUsecase = usecase;
  }

  listAll() {
    return this.connectorUsecase.listAll();
  }

  listBy(filter) {
    return this.connectorUsecase.listBy(filter);
  }

  save(connector) {
    return this.connectorUsecase.save(connector);
  }

  update(id) {
    return this.connectorUsecase.update(id, connector);
  }

  delete(id) {
    return this.connectorUsecase.delete(id);
  }
  restore(id) {
    return this.connectorUsecase.restore(id);
  }
}
