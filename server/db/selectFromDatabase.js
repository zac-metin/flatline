
function getEmotions(connectToKnexFunction) {
   return connectToKnexFunction('emotions')
    .select('*')
}


module.exports = {
  getEmotions
}
