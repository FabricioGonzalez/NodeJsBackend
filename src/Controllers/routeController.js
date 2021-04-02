import { Router } from 'express';
import JWT from './JWT/jwt.js';
import AppFactory from '../Factory/appFactory.js';
import jwtMiddleware from './JWT/jwtMiddleware.js';

const jwt = new JWT();
const router = Router();
const appService = new AppFactory();
appService.connect();

/**
 *
 * @api {get} /connector/ Lists all connectors
 * @apiVersion 0.0.1
 * @apiName GetAllConnectors
 * @apiGroup connector
 * @apiPermission administrator
 *
 * @apiDescription
 *
 * @apiParam {Integer} id The Users-ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @apiSuccess {Integer}   id            The Users-ID.
 * @apiSuccess {Date}     registered    Registration Date.
 * @apiSuccess {Date}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 * @apiSuccess {Object[]} options       List of Users options (Array of Objects).
 * @apiSuccess {String}   options.name  Option Name.
 * @apiSuccess {String}   options.value Option Value.
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */

router.get('/connector/:limit', jwtMiddleware, async (req, res) => {
  console.log(req.key);
  const param = Number(req.params.limit);

  const { data } = await appService.ConnectorService.listAll(param);
  res.status(200).json(data);
});
router.get('/connector', jwtMiddleware, async (req, res) => {
  console.log(req.key);
  const { data } = await appService.ConnectorService.listAll();
  res.status(200).json(data);
});

/**
 *
 * @api {get} /connector/ Lists a connector specifically
 * @apiVersion 0.0.1
 * @apiName GetConnectorByID
 * @apiGroup connector
 * @apiPermission administrator
 *
 * @apiDescription
 *
 * @apiParam {String} id The Users-ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @apiSuccess {Integer}   id            The Users-ID.
 * @apiSuccess {Date}     registered    Registration Date.
 * @apiSuccess {Date}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 * @apiSuccess {Object[]} options       List of Users options (Array of Objects).
 * @apiSuccess {String}   options.name  Option Name.
 * @apiSuccess {String}   options.value Option Value.
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
router.get('/connector/filter/:param', jwtMiddleware, async (req, res) => {
  const param = req.params.param;
  const response = await appService.ConnectorService.listBy(param);

  res.status(200).json(response.data);
});

/**
 *
 * @api {delete} /connector/ deletes a connectors specifically
 * @apiVersion 0.0.1
 * @apiName DeleteConnector
 * @apiGroup connector
 * @apiPermission administrator
 *
 * @apiDescription
 *
 * @apiParam {String} id The Users-ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @apiSuccess {Integer}   id            The Users-ID.
 * @apiSuccess {Date}     registered    Registration Date.
 * @apiSuccess {Date}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 * @apiSuccess {Object[]} options       List of Users options (Array of Objects).
 * @apiSuccess {String}   options.name  Option Name.
 * @apiSuccess {String}   options.value Option Value.
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
router.delete('/connector/:id', jwtMiddleware, async (req, res) => {
  const param = String(req.params.id);

  const response = await appService.ConnectorService.delete(param);

  res.status(200).json(response.data);
});

/**
 *
 * @api {post} /connector/ Creates a Connector
 * @apiVersion 0.0.1
 * @apiName PostConnector
 * @apiGroup connector
 * @apiPermission administrator
 *
 * @apiDescription
 *
 * @apiParam {String} id The Users-ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @apiSuccess {Integer}   id            The Users-ID.
 * @apiSuccess {Date}     registered    Registration Date.
 * @apiSuccess {Date}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 * @apiSuccess {Object[]} options       List of Users options (Array of Objects).
 * @apiSuccess {String}   options.name  Option Name.
 * @apiSuccess {String}   options.value Option Value.
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
router.post('/connector', jwtMiddleware, async (req, res) => {
  const body = req.body;
  const { ok, data } = await appService.ConnectorService.save(body);
  console.log(data);

  res.status(201).json({ response: ok, data });
});

/**
 *
 * @api {put} /connector/ Updates a connector
 * @apiVersion 0.0.1
 * @apiName UpdateConnector
 * @apiGroup connector
 * @apiPermission administrator
 *
 * @apiDescription
 *
 * @apiParam {String} id The Users-ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @apiSuccess {Integer}   id           The Users-ID.
 * @apiSuccess {Date}     registered    Registration Date.
 * @apiSuccess {Date}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 * @apiSuccess {Object[]} options       List of Users options (Array of Objects).
 * @apiSuccess {String}   options.name  Option Name.
 * @apiSuccess {String}   options.value Option Value.
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
router.put('/connector/:id', jwtMiddleware, async (req, res) => {
  const param = req.params.id;

  const body = req.body;

  const response = await appService.ConnectorService.update(param, body);

  res.status(201).json(response.data);
});

router.get('/connector/restore/:id', jwtMiddleware, async (req, res) => {
  const param = req.params.id;

  const response = await appService.ConnectorService.restore(param);

  res.status(201).json(response.data);
});

router.post('/app/generate_key/', jwtMiddleware, async (req, res) => {
  const body = req.body;

  const response = await appService.MongoDBRepository.generateKey(body);

  res.status(201).json(response.data);
});

router.post('/app/auth/', async (req, res) => {
  const body = req.body;

  const response = await appService.MongoDBRepository.compareKey(body);

  const { data } = response;

  const token = jwt.sign(data.Key);

  res
    .status(201)
    .json({ message: 'Autenticado com sucesso', data: response.data, token });
});

export default router;
