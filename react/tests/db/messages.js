const knex = require('knex')({
  client: 'pg',
  connection: {
	user: 'jaredthomas',
	password: '',
	database: 'guestbook',
	host: 'localhost',
	port: 5432
  }
})

module.exports = function () {
  return knex('Guestbooks')
}