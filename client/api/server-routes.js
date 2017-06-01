import request from 'superagent'

//importing actions so that they can be called when we get stuff from api, then pass the stuff to actions
import {receiveEmotions} from '../actions/emotions'
import {receiveSituations} from '../actions/situations'

export function getEmotions(){
  console.log("starting api request");
  return (dispatch) => {
    request
    .get('/api/emotions')
    .end((err, res) => {
      console.log("return api request",res.body);
      dispatch(receiveEmotions(res.body))
    })
  }
}

export function getSituations(){
  return (dispatch) => {
    request
    .get('/api/situations')
    .end((err,res) => {
      console.log("error occured while trying to get situations from server api",res.body);
      dispatch(receiveSituations(res.body))
    })
  }
}

export default function wtf(){
  console.log(1);
}

//for some reason this was not working I don't know why
module.exports = {
  getEmotions,
  getSituations
}
