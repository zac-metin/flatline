// import test from 'ava'
// import nock from 'nock'
//
// import * as actions from '../client/actions/emotions'
//
// test.cb('fetchPosts', t => {
//   const scope = nock('http://localhost:80')
//     .get('/api/emotions/')
//     .reply(200, [{data: 'This works'}])
//
//   actions.fetchPosts('Happiness')((actual) => {
//     scope.done()
//     t.is(actual.type, 'RECEIVE_EMOTIONS')
//     t.is(actual.posts.length, 1)
//     t.is(actual.posts[0], 'This works too')
//     t.end()
//   })
// })
