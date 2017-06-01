import React from 'react'
import {connect} from 'react-redux'

const renderEmotion = (emotion) =>
  <button
    onClick={() => situation()}>{emotion.emotion}
  </button>

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

function situation() {
  console.log('potatoes');
  return <h1>"Situation here"</h1>
}


export default connect(mapStateToProps)(RenderEmotions)
