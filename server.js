'use strict';
require(dotenv).config();
const expres = require('express')
const app = expres();
const PORT = process.env.PORT;

const client = new pg.Client(process.env.DATABASE_URL);

app.get('/people',(req, res)=> {
  console.log('you hit the route');
  let firstName = req.query.first;
let lastName = req.query.last;
let SQL = `INSERT INTO people (first_name, last _name)' VALUE ($1, $2)
returning *`;
let safeValues = [firstName, lastName];
client.query(SQL, safeValue);
  .then( results => {
    res.status(200).json(results);
  })
  .catch(err => console.error(err));
});

app.get('/people', (req, res) =>{
  letSQL = 'SELECT * FROM people';
  client.query(SQL)
  .then(results => {
    res.status(200).json(results.rows);
  })
  .catch(err => console.err(err))
})

client.conect()
.then(() => {
  app.listening(PORT, () => {
    console.log('listening on  ${PORT}');
    })
  }) 
  .catch(err =>{
    throw `pg startup error ${err.message}`
  });