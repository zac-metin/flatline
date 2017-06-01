import React from 'react'
import {connect} from 'react-redux'
import {fetchSituations} from '../actions/situations'

const EmotionItem = (props) => {

  const handleclick=()=>{props.dispatch(fetchSituations(props.emotion));}

  return(
    <div>
      <h1><a href='#' onClick={handleclick}>{props.emotion}</a></h1>
    </div>
  )
}

export default connect()(EmotionItem)
