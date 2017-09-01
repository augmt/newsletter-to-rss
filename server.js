'use strict';

const Koa = require('koa');
const cors = require('kcors');
const router = require('./routes.js');

const app = new Koa();

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(process.env.PORT);

module.exports = server;
