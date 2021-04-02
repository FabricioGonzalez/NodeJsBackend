import JWT from './jwt.js';

const jwt = new JWT();

const jwtMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token);
    req.key = decode;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Falha na autenticação do token' });
  }
};

export default jwtMiddleware;
