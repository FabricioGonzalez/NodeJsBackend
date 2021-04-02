export default class ConnectorService {
  constructor(usecase) {
    this.connectorUsecase = usecase;
  }

  async listAll(limit) {
    const data = await this.connectorUsecase.listAll(limit);
    return data;
  }

  async listBy(filter) {
    const data = await this.connectorUsecase.listBy(filter);
    return data;
  }

  async save(connector) {
    return await this.connectorUsecase.save(connector);
  }

  async update(id, connector) {
    const data = await this.connectorUsecase.update(id, connector);
    return data;
  }

  async delete(id) {
    const data = await this.connectorUsecase.delete(id);
    return data;
  }
  async restore(id) {
    const data = await this.connectorUsecase.restore(id);
    return data;
  }
}
