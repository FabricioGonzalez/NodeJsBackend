import connectorModel from './MongoDB/Model/connectorModel.js';
import MongoDBRepository from './MongoDB/mongoDBrepository.js';

const ConnectorModel = connectorModel;
const MongoDB = new MongoDBRepository(ConnectorModel);
MongoDB.connect();

describe('Repositories Tests Suite', () => {
  describe('Mongo Repository test', () => {
    describe('Insert Test', () => {
      it('should insert data, no validation required', () => {
        const data = {
          Name: 'Oks',
          Type: 'Rest',
          Privacy: 'Private',
          BaseURL: 'http://nov.log',
          LogoURL: 'http://nov.log',
          Category: 'Data',
          Description: 'Ok',
          Status: 'available',
        };

        return MongoDB.save(data).then((data) => {
          expect(data).toBeTruthy();
        });
      });

      describe('List All Test', () => {
        it('should listAll data, no validation required', () => {
          return MongoDB.listAll().then(({ ok, data }) => {
            expect(ok).toBeTruthy();
          });
        });
      });

      describe('List One Test', () => {
        it('should List One data, no validation required', () => {
          return MongoDB.listBy({ Type: 'Rest' }).then(({ ok, data }) => {
            console.log(data);
            expect(ok).toBeTruthy();
          });
        });
      });

      describe('Update Test', () => {
        it('should Update data, no validation required', () => {
          return MongoDB.update('60669945eac6dc45e5d2d173', {
            Name: 'Data',
            Type: 'SOAP',
            Privacy: 'Public',
          }).then((data) => {
            expect(data.ok).toBeTruthy();
          });
        });
      });

      describe('Delete  Test', () => {
        it('should Delete data, no validation required', () => {
          return MongoDB.delete('60669945eac6dc45e5d2d173').then((data) => {
            expect(data.ok).toBeTruthy();
          });
        });
      });
    });
  });
});
