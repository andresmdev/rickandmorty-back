const { GraphQLList, GraphQLID, GraphQLNonNull } = require("graphql");
const { getAllCharcters, getCharacterBy } = require("../models");
const { CharacterType } = require("./types");

const characters = {
  name: "characters",
  type: new GraphQLList(CharacterType),
  description: "Retrieves a list of characters",
  resolve: () => getAllCharcters(),
};

const character = {
  type: CharacterType,
  description: "Retrieve a single character",
  args: {
    id: { 
      type: new GraphQLNonNull(GraphQLID) 
    },
  },
  resolve: (_, { id }) => getCharacterBy(id),
};

module.exports = {
  characters,
  character
};
