const express = require('express');
const path = require('path');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    this.middlewares();
    this.routes();
    this.listen();
  }

  middlewares() {
    this.app.use(
      express.static(path.join(__dirname, "../client/build"))
    );
  }

  routes() {
    this.app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/index.html'));
    });
  }

  listen() {
    this.app.listen(this.port, console.log(`Server started on port ${this.port}`));
  }
}

module.exports = Server;