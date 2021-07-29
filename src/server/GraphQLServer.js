var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var graphql = require('graphql');

var fakeDatabase = {
  a: { id: 'a', name: 'Alice', age: 1 },
  b: { id: 'b', name: 'bob', age: 2 },
  c: { id: 'c', name: 'Charlie', age: 3 },
};

// A query to fetch the name and age of user with id "a"
/* 

theory:
user refers to queryType.fields.user
(id: "a") refers to an arg defined as det key
{
  user(id: "a")
  {
    name
    age
  }
}
 */

// Define the "User" type
var userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt },
  },
});

var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      // args describes the arguments that the user query accept
      args: {
        id: { type: graphql.GraphQLString },
      },
      resolve: (_, { id }) => {
        return fakeDatabase[id];
      },
    },
  },
});

var schema = new graphql.GraphQLSchema({ query: queryType });

var app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
