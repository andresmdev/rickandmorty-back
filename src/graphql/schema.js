const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const { characters, character } = require("./queries");

const QueryType = new GraphQLObjectType({
  name : "QueryType",
  description : "Queries",
  fields: {
    characters,
    character
  },
});

const schema = new GraphQLSchema({
  query: QueryType
});

module.exports = schema;
