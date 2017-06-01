
import test from 'ava'
import request from 'supertest'
import nock from 'nock'

import server from '../server'

test.cb('GET /api/emotions', t => {
  const scope = nock('http://www.heroku.emogile.com')
    .get('/Emotions.json')
    .reply(200, (err, res))

  request(server)
    .get('/api/emotions/')
    .expect(200)
    .end((err, res) => {
      scope.done()
      t.is(err, null)
      t.is(res.body.msg, 'Yup, I am emotional')
      t.end()
    })
})
