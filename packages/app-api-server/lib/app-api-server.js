"use strict";

const appCore = require("@alincode/app-core");
appCore();

function appApiServer() {
  const Koa = require("koa");
  const app = new Koa();

  app.use(async ctx => {
    ctx.body = "Hello World";
  });

  app.listen(3000);
}

const server = appApiServer();

module.exports = server;
