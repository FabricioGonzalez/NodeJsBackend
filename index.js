import Connector from 'src/Entities/connector.js';
import ConnectorUseCases from 'src/UseCases/connectorUseCases.js';
import ConnectorService from 'src/Services/connectorService.js';
import MongoDBRepository from 'src/Repositories/mongoDBrepository';
import ConnectorController from 'src/Controllers/RouteController.js';

(() => {
	const connector = new Connector();
	const mongodbRepository = new MongoDBRepository();
	const connectorService = new ConnectorService(
		connectorUseCases,
		mongodbRepository,
	);
	const connectorUseCases = new ConnectorUseCases(connector, mongodbRepository);
	const connectorController = new ConnectorController(
		connector,
		connectorService,
	);
})();
