
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emotions').del()
    .then(function () {
      // Inserts seed entries
      return knex('emotions').insert([
        {emotion_id: 1, emotion: 'Happy'},
        {emotion_id: 2, emotion: 'Sad'},
        {emotion_id: 3, emotion: 'Complex Designer Emotions'}
      ]);
    });
};
