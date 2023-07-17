const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = require("graphql");

const CharacterType = new GraphQLObjectType({
  name: "Character",
  description: "Character Type",
  fields: () => ({
    id: { 
      type: GraphQLID 
    },
    name: { 
      type: GraphQLString 
    },
    status: { 
      type: GraphQLString 
    },
    gender: { 
      type: GraphQLString 
    }
  }),
});

module.exports = {
  CharacterType
};
