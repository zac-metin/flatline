import React from 'react'
import {connect} from 'react-redux'

const renderEmotion = (emotion) => <h1>{emotion.emotion}</h1>

const RenderEmotions = (props) => (
  <div>
    {props.emotions.map(renderEmotion)}
  </div>
)

function mapStateToProps(state) {
  return {
    emotions: state.emotions
  }
}

export default connect(mapStateToProps)(RenderEmotions)
