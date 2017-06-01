import {getEmotions} from '../api/server-routes'

//geting emotions from api to pass to receiveEmotions, receiveEmotions is being called/dispached from getEmotions function in api/emotions. Normally action must return type, but this action is able to return a function because we are using Thunk middleware
export function fetchEmotions(){
  return getEmotions()
}

//This action actually changes the state of the store/app by calling the reducer and giving it emotions received from api to be added to the state
export function receiveEmotions (emotions) {
  return {
    type: 'RECEIVE_EMOTIONS',
    emotions
  }
}
