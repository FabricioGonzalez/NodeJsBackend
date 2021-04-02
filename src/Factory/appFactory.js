import Connector from '../Entities/connector.js';
import ConnectorUseCase from '../UseCases/connectorUseCases.js';
import ConnectorService from '../Services/connectorService.js';
import MongoDBRepository from '../Repositories/MongoDB/mongoDBrepository.js';
import connectorModel from '../Repositories/MongoDB/Model/connectorModel.js';

export default class AppFactory {
  constructor() {
    this.MongoDBRepository = new MongoDBRepository(connectorModel);
    this.ConnectorUseCase = new ConnectorUseCase(MongoDBRepository);
    this.ConnectorService = new ConnectorService(ConnectorUseCase);
  }

  factory() {
    return this.ConnectorService;
  }
  connector(connector) {
    return new Connector(connector);
  }
}
