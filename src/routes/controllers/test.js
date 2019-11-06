const knex = require('src/utils/db');

const v1 = async (req, res) => {
  res.json({ list: await knex('person') });
};

module.exports = v1;
