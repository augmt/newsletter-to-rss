'use strict';

import Koa from 'koa';
import router from './routes.js';
import cors from 'koa-cors';

const app = new Koa();

app.name = 'newsletter-to-rss';

app.use(cors());
app.use(router.routes());

export default app;
