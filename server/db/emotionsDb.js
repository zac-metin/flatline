
function getEmotions(knex) {
   knex('emotions')
    .select('*')
}


module.exports = {
  getEmotions
}
