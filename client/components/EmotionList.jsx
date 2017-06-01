import React from 'react'
import {connect} from 'react-redux'

import {fetchEmotions} from '../actions/emotions'
import EmotionItem from './EmotionItem'

class EmotionList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchEmotions())
  }

  renderEmotion= (emotion) => <h1>{emotion.emotion}</h1>

  render() {
    return (
      <div>
        {this.props.emotions.map((item)=><EmotionItem key={item.emotion_id} emotion={item.emotion}/>)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    emotions: state.emotions
  }
}

export default connect(mapStateToProps)(EmotionList)
