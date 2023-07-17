const  { graphqlHTTP } = require('express-graphql');
const express = require('express');
const router = express.Router();

const schema = require('../graphql/schema');

router.get('/', function(_, res) {
  res.send('Hello World!');
});

router.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

module.exports = router;
