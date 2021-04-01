import { Router } from 'express';
import JWT from './JWT/jwt';

const jwt = new JWT();
const router = Router();

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
router.get('/connector', (req, res) => {});

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
router.get('/connector/:id', (req, res) => {
	return this.service.listBy(id);
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
router.delete('connector/:id', (req, res) => {});

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
router.post('/create_connector', (req, res) => {
	this.connector = body;
	return this.service.insert(this.connector);
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
router.put('connector/:id', (req, res) => {
	return this.service.update(id, this.connector);
});

export default router;
