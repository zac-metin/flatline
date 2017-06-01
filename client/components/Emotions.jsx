import React from 'react'
import {connect} from 'react-redux'
import {fetchEmotions} from '../actions/emotions'

class Emotions extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchEmotions())
  }

  renderEmotion= (emotion) => <h1>{emotion.emotion}</h1>

  render() {
    return (
      <div>
        {this.props.emotions.map(this.renderEmotion)}
        <button>Show Situations</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    emotions: state.emotions
  }
}

export default connect(mapStateToProps)(Emotions)
