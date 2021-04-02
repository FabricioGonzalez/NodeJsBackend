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

          return MongoDB.listAll(1).then((data) => {
            expect(data).toEqual([
              {
                _id: expect.anything(),
                Name: 'Oks',
                Type: 'Rest',
                Privacy: 'Private',
                BaseURL: 'http://nov.log',
                LogoURL: 'http://nov.log',
                Category: 'Data',
                Description: 'Ok',
                Status: 'available',
                created_at: expect.anything(),
                updated_at: expect.anything(),
                __v: 0,
              },
            ]);
          });
        });
      });

      describe('List One Test', () => {
        it('should List One data, no validation required', () => {});
      });

      describe('Update Test', () => {
        it('should Update data, no validation required', () => {});
      });

      describe('Delete  Test', () => {
        it('should Delete data, no validation required', () => {});
      });
    });
  });
});
