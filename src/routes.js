'use strict';

import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { MailParser } from 'mailparser';
import RSS from 'rss';

const router = new Router();
const mailparser = new MailParser();
const feed = new RSS({
  title: '',
  feed_url: '',
  site_url: ''
});

mailparser.on('end', function (mail) {
  feed.item({
    title: '',
    description: mail.text,
    url: '',
    guid: '',
    date: ''
  });
});

router.get('/', ctx => {
  ctx.body = feed.xml({indent: '  '});
  ctx.type = 'rss';
});

router.post('/', bodyParser({formLimit: '1mb'}), ctx => {
  mailparser.write(ctx.request.body['stripped-html']);
  mailparser.end();

  ctx.status = 200;
});

export default router;
