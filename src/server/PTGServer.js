var express = require("express");
var { graphqlHTTP } = require('express-graphql');
var graphql = require('graphql');

// These calls work:
/**
 * 
{
  mana (manaType:"ice") {
    manaType
  }
}

{
  instant(instantName: "iceCrystal") {
    instantName
    instantCost
  }
}
 */

var fakeDatabase = {
  mana: {
    fire: {
      manaType: "fire"
    },
    ice: {
      manaType: "ice"
    }
  },
  instant: {
    iceCrystal:
    {
      instantName: "Ice crystal",
      instantDescription: "Deal 3 damage to target creature or target player",
      instantCost: "1 ice"
    },
    meteor:
    {
      instantName: "Meteor",
      instantDescription: "Deal 3 damage to target creature or target player",
      instantCost: "1 earth"
    },
  },
  sorcery: {
    expose: {
      sorceryName: "expose",
      sorceryDescription: "Lower defense with 100%",
      sorceryImage: "image",
      sorcreyCost: "1 any"
    }
  },
  creature: {
    drone: {
      creatureName: "drone",
      creatureImage: "✈",
      strength: 1,
      health: 1,
      abilities: [{
        abilityName: "fly",
        abilityFeature: "Creature gains 'flying' until end of turn",
        abilityCost: "1 any"
      }, {
        abilityName: "kamikaze",
        abilityFeature: "Sacrifice creature, deals damage equal to strength + health, draw a card.",
        abilityCost: "3 any",
      }]
    }
  }, cat: {
    creatureName: "cat",
    creatureImage: "🐈",
    strength: 1,
    health: 1,
    abilities: [{
      abilityName: "charm",
      abilityFeature: "All oponents must choose one phase to skip: pre battle, battle or post battle.",
      abilityCost: "1 any"
    }, {
      abilityName: "nine lives",
      abilityFeature: "Return creature to players hand, draw a card and summon one creature with haste to the battlefield.",
      abilityCost: "3 any",
    }]
  }
};

var manaType = new graphql.GraphQLObjectType({
  name: "ManaCard",
  fields: {
    manaType: { type: graphql.GraphQLString },
  }
});

var instantType = new graphql.GraphQLObjectType({
  name: "InstantCard",
  fields: {
    instantName: { type: graphql.GraphQLString },
    instantCost: { type: graphql.GraphQLString }
  }
});

var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    mana: {
      type: manaType,
      args: {
        manaType: { type: graphql.GraphQLString }
      },
      resolve: (_, { manaType }) => {
        return fakeDatabase.mana[manaType];
      }
    },
    instant: {
      type: instantType,
      args: {
        instantName: { type: graphql.GraphQLString },
        instantDescription: { type: graphql.GraphQLString },
        instantCost: { type: graphql.GraphQLString }
      },
      resolve: (_, { instantName }) => {
        return fakeDatabase.instant[instantName];
      }
    }
    // implement the rest of the types below
  }
});

var schema = new graphql.GraphQLSchema({ query: queryType });

var app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000);
console.log("PTG GQL server running at http://localhost:4000/graphql");