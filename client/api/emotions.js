import request from 'superagent'
let receiveEmotions = require('../actions/receiveEmotions').receiveEmotions

const getEmotions = () => {
  console.log("starting api request");
  return (dispatch) => {
    request
    .get('/api/emotions')
    .end((err, res) => {
      console.log({err});
      console.log(res.body);
      dispatch(receiveEmotions(res.body))
    })
  }
}


module.exports = {
  getEmotions
}
