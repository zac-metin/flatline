function emotions (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_EMOTIONS':
      console.log("reducer returning new state", action.emotions);
      return [...action.emotions]
    default:
      return state
  }
}

export default emotions
