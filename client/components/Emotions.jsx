import React from 'react'
import {connect} from 'react-redux'

import {getEmotions} from '../api/emotions'

class LoadEmotions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dispatch: props.dispatch
    }
  }

  componentDidMount() {
    this.state.dispatch(getEmotions())
  }

  render() {
    return <div></div>
  }
}

// let Emotions = ({dispatch}) => (
//   <button onClick={() => }>SADNESS</button>
// )


LoadEmotions = connect()(LoadEmotions)

export default LoadEmotions
