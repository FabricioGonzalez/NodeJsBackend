import express from 'express';
import router from '../Controllers/routeController.js';

export default class Server {
  #app = express();

  middleware() {
    this.#app.use(express.json());
    this.#app.use(router);
  }

  setUpServer() {
    this.middleware();
    const port = process.env.PORT || 4000;
    this.#app.listen(port, () => console.log(`Server at ${port}`));
  }
}
