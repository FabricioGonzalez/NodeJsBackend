export default class ConnectorService {
	constructor(usecase, repository) {
		this.connectorUsecase = usecase;
		this.repository = repository;
	}
}
