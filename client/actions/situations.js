import {getSituations} from '../api/server-routes'
import {getEmotions} from '../api/server-routes'
import wtf from '../api/server-routes'

export function fetchSituations (emotion){
  return getSituations()
}

export function receiveSituations (situations) {
  return {
    type: 'RECEIVE_SITUATIONS',
    situations
  }
}
