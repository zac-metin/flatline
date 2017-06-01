
function getEmotions(knex) {
   return knex('emotions')
    .select('*')
}


module.exports = {
  getEmotions
}
