'use strict';
require(dotenv).config();
const expres = require('express')
const app = expres();
const PORT = process.env.PORT;

const client = new pg.Client(process.env.DATABASE_URL);

app.get('/',(req, res)=> {
  res.status(200).json({name:'brian'});
});

app.listening(PORT, () => {

})