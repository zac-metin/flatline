
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emotions').del()
    .then(function () {
      // Inserts seed entries
      return knex('emotions').insert([
        {emotion_id: 1, emotion: 'Happiness'},
        {emotion_id: 2, emotion: 'Sadness'},
        {emotion_id: 3, emotion: 'Anxiety'},
        {emotion_id: 4, emotion: 'Frustration'}
      ]);
    });
};
