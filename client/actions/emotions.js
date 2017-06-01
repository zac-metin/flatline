import superagent from 'superagent'

import {getEmotions} from '../api/emotions'

export function receiveEmotions (emotions) {
  getEmotions()
  return {
    type: 'RECEIVE_EMOTIONS',
    emotions
  }
}

export function fetchEmotions (){
  return getEmotions()
}
