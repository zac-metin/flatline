import React from 'react'
import {connect} from 'react-redux'
const getEmotions = require('../api/emotions').getEmotions

let Emotions = ({dispatch}) => (
  <button onClick={() => getEmotions()}>SADNESS</button>
)

// LoadSubreddit = connect()(LoadSubreddit)

export default Emotions
