'use strict';

import test from 'tape';
import request from 'supertest';
import app from './../src/app.js';

const server = app.listen();

test(app.name, t => {
  request(server)
    .post('/')
    .expect(res => {
      t.equal(res.status, 200, 'should handle POSTs');
      t.equal(res.header['access-control-allow-origin'], '*', 'should allow CORS');
    })
    .end(t.end);
});

test.onFinish(() => server.close());
