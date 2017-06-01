import React from 'react'
import {connect} from 'react-redux'
import {fetchSituations} from '../actions/situations'

const EmotionItem = (props) => {

  const handleclick=()=>{props.dispatch(fetchSituations(props.emotion));}

  return(
    <div>
      <button onClick={handleclick}>{props.emotion}</button>
    </div>
  )
}

export default connect()(EmotionItem)
