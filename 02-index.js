'use strict'

const { graphql, buildSchema } = require('graphql');

// schema
const schema = buildSchema(`
    type Query {
        hello: String,
        saludo: String
    }
`);

// resolvers
const resolvers = {
    hello: () => 'Hola mundo',
    saludo: () => 'Hola a todos'
}

// execute query
graphql(schema, '{ saludo }', resolvers).then((data) => {
    console.log(data);
});