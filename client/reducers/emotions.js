function emotions (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_EMOTIONS':
      console.log("heyheydispatchedemotions", action.emotions);
      return [...action.emotions]
    default:
      return state
  }
}

export default emotions
