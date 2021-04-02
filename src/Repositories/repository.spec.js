import connectorModel from './MongoDB/Model/connectorModel.js';
import appModel from './MongoDB/Model/appModel.js';
import MongoDBRepository from './MongoDB/mongoDBrepository.js';

const ConnectorModel = connectorModel;
const MongoDB = new MongoDBRepository(ConnectorModel, appModel);
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
    });
    describe('List All Test', () => {
      it('should listAll data, no validation required', () => {
        return MongoDB.listAll().then(({ ok }) => {
          expect(ok).toBeTruthy();
        });
      });
    });

    describe('List with Limit Test', () => {
      it('should List One data, no validation required', () => {
        return MongoDB.listAll(1).then(({ ok, data }) => {
          console.log(data);
          expect(ok).toBeTruthy();
        });
      });
    });

    describe('List One Test', () => {
      it('should List One data, no validation required', () => {
        return MongoDB.listBy({ Type: 'Rest' }).then(({ ok }) => {
          expect(ok).toBeTruthy();
        });
      });
    });

    describe('Update Test', () => {
      it('should Update data, no validation required', () => {
        return MongoDB.update('606776344f1faa10b8cdcbfb', {
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
      }),
        it('should Restore data, no validation required', () => {
          return MongoDB.restore('60669945eac6dc45e5d2d173').then((data) => {
            expect(data.ok).toBeTruthy();
          });
        });
    });

    describe('App Key Test', () => {
      it('should generate a key', () => {
        return MongoDB.generateKey({ Name: 'oi', Key: 'key1234' }).then(
          (data) => {
            expect(data).toBeTruthy();
          },
        );
      });
      it('should compare key', () => {
        return MongoDB.compareKey({
          Id: '606774332d3eeb2eb0aa0a71',
          Key: '4564fsasf58grw',
        }).then((data) => {
          console.log(data);
          expect(data.ok).toBeTruthy();
        });
      });
    });
  });
});
