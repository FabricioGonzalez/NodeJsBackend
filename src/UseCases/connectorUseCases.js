export default class ConnectorUseCases {
	constructor(Connector, Repository) {
		this.connector = Connector;
		this.repository = Repository;
	}

	data = new Array();

	save() {
		const validConnector = this.connector.validate();

		if (validConnector.valid === false) {
			throw new Error();
		}

		this.repository.insert(this.connector);

		this.data.push(this.connector);

		return {
			ok: 'Insert successed',
			id: this.connector.id,
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
		const validConnector = this.connector.validate();

		if (validConnector.valid === false) {
			throw new Error();
		}

		return this.repository.update(connector);
	}

	delete(id) {
		const validConnector = this.connector.validate();

		if (validConnector.valid === false) {
			throw new Error();
		}

		return this.repository.delete(id);
	}
}
