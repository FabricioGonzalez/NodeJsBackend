import AppFactory from './appFactory.js';

const appFactory = new AppFactory();
appFactory.connect();

describe('Factory Test Suite', () => {
  describe('intance validation', () => {
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

      return appFactory.ConnectorService.save(data).then((data) => {
        expect(data).toBeTruthy();
      });
    });

    describe('List All Test', () => {
      it('should listAll data, no validation required', () => {
        return appFactory.ConnectorService.listAll().then(({ ok }) => {
          expect(ok).toBeTruthy();
        });
      });
    });

    describe('List One Test', () => {
      it('should List One data, no validation required', () => {
        return appFactory.ConnectorService.listBy({ Type: 'Rest' }).then(
          ({ ok }) => {
            expect(ok).toBeTruthy();
          },
        );
      });
    });

    describe('Update Test', () => {
      it('should Update data, no validation required', () => {
        return appFactory.ConnectorService.update('60669945eac6dc45e5d2d173', {
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
        return appFactory.ConnectorService.delete(
          '60669945eac6dc45e5d2d173',
        ).then((data) => {
          expect(data.ok).toBeTruthy();
        });
      }),
        it('should Restore data, no validation required', () => {
          return appFactory.ConnectorService.restore(
            '60669945eac6dc45e5d2d173',
          ).then((data) => {
            expect(data.ok).toBeTruthy();
          });
        });
    });
  });
});
