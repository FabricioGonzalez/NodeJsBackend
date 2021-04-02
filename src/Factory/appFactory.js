import Connector from '../Entities/connector.js';
import ConnectorUseCase from '../UseCases/connectorUseCases.js';
import ConnectorService from '../Services/connectorService.js';
import MongoDBRepository from '../Repositories/MongoDB/mongoDBrepository.js';
import connectorModel from '../Repositories/MongoDB/Model/connectorModel.js';
import appModel from '../Repositories/MongoDB/Model/appModel.js';

export default class AppFactory {
  constructor() {
    this.MongoDBRepository = new MongoDBRepository(connectorModel, appModel);
    this.ConnectorUseCase = new ConnectorUseCase(this.MongoDBRepository);
    this.ConnectorService = new ConnectorService(this.ConnectorUseCase);
  }

  connect() {
    this.MongoDBRepository.connect();
  }

  connector(connector) {
    return new Connector(connector);
  }
}
