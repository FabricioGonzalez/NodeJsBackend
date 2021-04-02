import Connector from '../Entities/connector.js';
import ConnectorUseCases from './connectorUseCases.js';
import { jest } from '@jest/globals';

describe('Connectors UseCases Test suite', () => {
  // Insert Test
  describe('Insert Test Suite', () => {
    it('should be successeful when trying to insert a valid connector', () => {
      const repository = {
        save: jest.fn(async (obj) => {
          return await { ok: true, obj };
        }),
      };
      const connector = new Connector({
        id: 1,
        Name: 'Nov',
        Type: 'Rest',
        Privacy: 'Private',
        BaseURL: 'http://nov.com',
        LogoURL: 'http://nov.com/logo',
        Category: 'Business',
        Description: 'null',
        Status: 'available',
      });

      const connectorUseCases = new ConnectorUseCases(repository);
      return connectorUseCases.save(connector).then((data) => {
        expect(data.ok).toBe('Insert successed');
      });
    });
  });
  // List Test
  describe('List Test Suite', () => {
    it('should be successeful when trying to list all connectors', () => {
      const repository = {
        listAll: jest.fn(async (limit) => {
          return await [
            {
              id: 1,
              Name: 'Nov',
              Type: 'Rest',
              Privacy: 'Private',
              BaseURL: 'http://nov.com',
              LogoURL: 'http://nov.com/logo',
              Category: 'Business',
              Description: 'null',
              Status: 'available',
            },
          ];
        }),
      };

      const expected = [
        {
          id: 1,
          Name: 'Nov',
          Type: 'Rest',
          Privacy: 'Private',
          BaseURL: 'http://nov.com',
          LogoURL: 'http://nov.com/logo',
          Category: 'Business',
          Description: 'null',
          Status: 'available',
        },
      ];

      const connectorUseCases = new ConnectorUseCases(repository);

      return connectorUseCases.listAll().then((data) => {
        expect(data).toEqual(expected);
      });
    }),
      it('should be successeful when trying to filter by attribute', () => {
        const repository = {
          listBy: jest.fn(async (attribute) => {
            const data = [
              {
                id: 1,
                Name: 'Nov',
                Type: 'Rest',
                Privacy: 'Public',
                BaseURL: 'http://nov.com',
                LogoURL: 'http://nov.com/logo',
                Category: 'Business',
                Description: 'null',
                Status: 'available',
              },
              {
                id: 2,
                Name: 'Nov',
                Type: 'Rest',
                Privacy: 'Private',
                BaseURL: 'http://nov.com',
                LogoURL: 'http://nov.com/logo',
                Category: 'Business',
                Description: 'null',
                Status: 'available',
              },
              {
                id: 3,
                Name: 'Nov',
                Type: 'Rest',
                Privacy: 'Private',
                BaseURL: 'http://nov.com',
                LogoURL: 'http://nov.com/logo',
                Category: 'Business',
                Description: 'null',
                Status: 'available',
              },
              {
                id: 4,
                Name: 'Nov',
                Type: 'soap',
                Privacy: 'Private',
                BaseURL: 'http://nov.com',
                LogoURL: 'http://nov.com/logo',
                Category: 'Business',
                Description: 'null',
                Status: 'available',
              },
            ];

            return await data.filter((item) => {
              for (let i in item) {
                if (item[i] == attribute) {
                  return item;
                }
              }
            });
          }),
        };

        const connectorUseCases = new ConnectorUseCases(repository);

        const expected = [
          {
            id: 1,
            Name: 'Nov',
            Type: 'Rest',
            Privacy: 'Public',
            BaseURL: 'http://nov.com',
            LogoURL: 'http://nov.com/logo',
            Category: 'Business',
            Description: 'null',
            Status: 'available',
          },
        ];

        return connectorUseCases.listBy('Public').then((data) => {
          expect(data).toEqual(expected);
        });
      });
  });

  // Update Test
  describe('Update Test Suite', () => {
    it('should be successeful when trying to update with valid connector data', () => {
      const repository = {
        update: jest.fn(async (id, data) => {
          const arr = [
            {
              id: 1,
              Name: 'null',
              Type: 'Rest',
              Privacy: 'Private',
              BaseURL: 'http://nov.com',
              LogoURL: 'http://nov.com/logo',
              Category: 'Business',
              Description: 'null',
              Status: 'available',
            },
          ];

          const result = arr.map((item) => {
            for (const i in item) {
              if (item.id === id) {
                if (item[i] !== data[i]) {
                  item[i] = data[i];
                }
              }
            }
            return item;
          });

          return await result;
        }),
      };
      const connectorUseCases = new ConnectorUseCases(repository);

      const expected = [
        {
          id: 1,
          Name: 'null',
          Type: 'Rest',
          Privacy: 'Private',
          BaseURL: 'http://nov.com',
          LogoURL: 'http://nov.com/logo',
          Category: 'Business',
          Description: 'Ola',
          Status: 'available',
        },
      ];

      return connectorUseCases
        .update(1, {
          id:1,
          Name: 'null',
          Type: 'Rest',
          Privacy: 'Private',
          BaseURL: 'http://nov.com',
          LogoURL: 'http://nov.com/logo',
          Category: 'Business',
          Description: 'Ola',
          Status: 'available',
        })
        .then((data) => {
          expect(data).toStrictEqual(expected);
        });
    });
  });

  // Delete Test
  describe('Delete Test Suite', () => {
    it('should be successeful when trying to delete a valid connector', () => {
      const repository = {
        delete: jest.fn(async (id) => {
          const data = [
            {
              id: 1,
              Name: 'Nov',
              Type: 'Rest',
              Privacy: 'Public',
              BaseURL: 'http://nov.com',
              LogoURL: 'http://nov.com/logo',
              Category: 'Business',
              Description: 'null',
              Status: 'available',
            },
            {
              id: 2,
              Name: 'Nov',
              Type: 'Rest',
              Privacy: 'Private',
              BaseURL: 'http://nov.com',
              LogoURL: 'http://nov.com/logo',
              Category: 'Business',
              Description: 'null',
              Status: 'available',
            },
            {
              id: 3,
              Name: 'Nov',
              Type: 'Rest',
              Privacy: 'Private',
              BaseURL: 'http://nov.com',
              LogoURL: 'http://nov.com/logo',
              Category: 'Business',
              Description: 'null',
              Status: 'available',
            },
            {
              id: 4,
              Name: 'Nov',
              Type: 'soap',
              Privacy: 'Private',
              BaseURL: 'http://nov.com',
              LogoURL: 'http://nov.com/logo',
              Category: 'Business',
              Description: 'null',
              Status: 'available',
            },
          ];

          const result = data.map((item) => {
            if (item.id === id) {
              item.Status = 'unavailable';
            }
            return item;
          });

          return await result;
        }),
      };
      const connectorUseCases = new ConnectorUseCases(repository);

      const expected = [
        {
          id: 1,
          Name: 'Nov',
          Type: 'Rest',
          Privacy: 'Public',
          BaseURL: 'http://nov.com',
          LogoURL: 'http://nov.com/logo',
          Category: 'Business',
          Description: 'null',
          Status: 'unavailable',
        },
        {
          id: 2,
          Name: 'Nov',
          Type: 'Rest',
          Privacy: 'Private',
          BaseURL: 'http://nov.com',
          LogoURL: 'http://nov.com/logo',
          Category: 'Business',
          Description: 'null',
          Status: 'available',
        },
        {
          id: 3,
          Name: 'Nov',
          Type: 'Rest',
          Privacy: 'Private',
          BaseURL: 'http://nov.com',
          LogoURL: 'http://nov.com/logo',
          Category: 'Business',
          Description: 'null',
          Status: 'available',
        },
        {
          id: 4,
          Name: 'Nov',
          Type: 'soap',
          Privacy: 'Private',
          BaseURL: 'http://nov.com',
          LogoURL: 'http://nov.com/logo',
          Category: 'Business',
          Description: 'null',
          Status: 'available',
        },
      ];

      return connectorUseCases.delete(1).then((data) => {
        expect(data).toEqual(expected);
      });
    });

    it('should be successeful when trying to restore a valid connector unavailable', () => {
      const repository = {
        restore: jest.fn(async (id) => {
          const data = [
            {
              id: 1,
              Name: 'Nov',
              Type: 'Rest',
              Privacy: 'Public',
              BaseURL: 'http://nov.com',
              LogoURL: 'http://nov.com/logo',
              Category: 'Business',
              Description: 'null',
              Status: 'unavailable',
            },
            {
              id: 2,
              Name: 'Nov',
              Type: 'Rest',
              Privacy: 'Private',
              BaseURL: 'http://nov.com',
              LogoURL: 'http://nov.com/logo',
              Category: 'Business',
              Description: 'null',
              Status: 'available',
            },
            {
              id: 3,
              Name: 'Nov',
              Type: 'Rest',
              Privacy: 'Private',
              BaseURL: 'http://nov.com',
              LogoURL: 'http://nov.com/logo',
              Category: 'Business',
              Description: 'null',
              Status: 'available',
            },
            {
              id: 4,
              Name: 'Nov',
              Type: 'soap',
              Privacy: 'Private',
              BaseURL: 'http://nov.com',
              LogoURL: 'http://nov.com/logo',
              Category: 'Business',
              Description: 'null',
              Status: 'available',
            },
          ];

          const result = data.map((item) => {
            if (item.id === id) {
              item.Status = 'available';
            }
            return item;
          });

          return await result;
        }),
      };

      const connectorUseCases = new ConnectorUseCases(repository);

      const expected = [
        {
          id: 1,
          Name: 'Nov',
          Type: 'Rest',
          Privacy: 'Public',
          BaseURL: 'http://nov.com',
          LogoURL: 'http://nov.com/logo',
          Category: 'Business',
          Description: 'null',
          Status: 'available',
        },
        {
          id: 2,
          Name: 'Nov',
          Type: 'Rest',
          Privacy: 'Private',
          BaseURL: 'http://nov.com',
          LogoURL: 'http://nov.com/logo',
          Category: 'Business',
          Description: 'null',
          Status: 'available',
        },
        {
          id: 3,
          Name: 'Nov',
          Type: 'Rest',
          Privacy: 'Private',
          BaseURL: 'http://nov.com',
          LogoURL: 'http://nov.com/logo',
          Category: 'Business',
          Description: 'null',
          Status: 'available',
        },
        {
          id: 4,
          Name: 'Nov',
          Type: 'soap',
          Privacy: 'Private',
          BaseURL: 'http://nov.com',
          LogoURL: 'http://nov.com/logo',
          Category: 'Business',
          Description: 'null',
          Status: 'available',
        },
      ];
      return connectorUseCases.restore(1).then((data) => {
        expect(data).toEqual(expected);
      });
    });
  });
});
