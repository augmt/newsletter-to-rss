'use strict';

const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const RSS = require('rss');

const router = new Router();
const feed = new RSS({
  title: '',
  description: '',
  generator: '',
  feed_url: '',
  site_url: '',
  docs: ''
});

router.get('/', ctx => {
  ctx.body = feed.xml({indent: '  '});
  ctx.type = 'rss';
});

router.post('/', bodyParser({formLimit: '1mb'}), ctx => {
  const {subject: title, 'stripped-html': description, date} = ctx.request.body;
  feed.item({title, description, url: '', date});
  ctx.status = 200;
});

module.exports = router;
