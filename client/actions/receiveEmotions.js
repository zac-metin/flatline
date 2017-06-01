import superagent from 'superagent'

export function receiveEmotions (emotions) {
  return {
    type: 'RECEIVE_EMOTIONS',
    emotions
  }
}
