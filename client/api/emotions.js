import request from 'superagent'

const getEmotions = () => {
  console.log("starting api request");
  request
    .get('/api/emotions')
    .end((req, res) => {
      console.log(res.body);
    })
}

module.exports = {
  getEmotions
}
