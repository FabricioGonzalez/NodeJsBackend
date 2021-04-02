import { Router } from 'express';
import JWT from './JWT/jwt.js';
import AppFactory from '../Factory/appFactory.js';
import jwtMiddleware from './JWT/jwtMiddleware.js';

const jwt = new JWT();
const router = Router();
const appService = new AppFactory();
appService.connect();

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

router.get('/connector/filter/:param', jwtMiddleware, async (req, res) => {
  const param = req.params.param;
  const response = await appService.ConnectorService.listBy(param);

  res.status(200).json(response.data);
});

router.delete('/connector/:id', jwtMiddleware, async (req, res) => {
  const param = String(req.params.id);

  const response = await appService.ConnectorService.delete(param);

  res.status(200).json(response.data);
});

router.post('/connector', jwtMiddleware, async (req, res) => {
  const body = req.body;
  const { ok, data } = await appService.ConnectorService.save(body);
  console.log(data);

  res.status(201).json({ response: ok, data });
});

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
