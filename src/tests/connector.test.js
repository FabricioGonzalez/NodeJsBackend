import Connector from '../Entities/connector.js';

describe('Testing connector entity', () => {

  it('should return error if some parametter is missing', () => {
		let connector = {
			id: 1,
			Name: 'Nov',
			Type: 'Rest',
			Privacy: 'Private',
			BaseURL: 'http://nov.com',
			LogoURL: 'http://nov.com/logo',
			Category: 'Business',
			Description: null,
			Status: 'available',
		};
		let connectorObj = new Connector(connector);
		let invalid = connectorObj.validate();
		let { valid } = invalid;
		expect(valid).toBeFalsy();
	});

  it('should return a valid instance of connector', () => {
		let connector = {
			id: 1,
			Name: 'Nov',
			Type: 'Rest',
			Privacy: 'Private',
			BaseURL: 'http://nov.com',
			LogoURL: 'http://nov.com',
			Category: 'Rest',
			Description: 'null',
			Status: 'available',
		};
		let connectorObj = new Connector(connector);
		let valid = connectorObj.validate();
		expect(valid.valid).toBeTruthy();
	});
});
