import jwt from 'jsonwebtoken';

class JWT {
  sign(key) {
    const token = jwt.sign({ key }, process.env.SECRET, {
      expiresIn: 360,
    });

    return { auth: true, token: token };
  }
  verify(token) {
    jwt.verify(token, process.env.SECRET);
  }
}

export default JWT;
