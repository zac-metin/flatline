import React from 'react'
import {connect} from 'react-redux'

import {getEmotions} from '../api/emotions'

class Emotions extends React.Component {

  componentDidMount() {
    this.props.dispatch(getEmotions())
  }

  render() {
    return <div></div>
  }
}

// let Emotions = ({dispatch}) => (
//   <button onClick={() => }>SADNESS</button>
// )


Emotions = connect()(Emotions)

export default Emotions
