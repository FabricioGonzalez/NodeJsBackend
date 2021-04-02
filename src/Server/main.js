import express from 'express';
import router from '../Controllers/routeController.js';

export default class Server {
  #app;

  instanciateApp() {
    this.#app = new express();
  }

  middleware() {
    this.#app.use(express.json());
    this.#app.use(router);
  }

  setUpServer() {
    this.instanciateApp();
    this.middleware();
    const port = process.env.PORT || 3000;
    this.#app.listen(port, () => console.log(`Server at ${port}`));
  }
}
