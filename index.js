const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')

// Insert a valida connection string
const MONGODB = ""


// Apollo Server
// typeDefs: Gql type definitions
// resolvers: how we resolve the queries / mutations

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB connected')
        return server.listen({ port: 5000 })
    })
    .then((response) => {
        console.log(`Server running at ${response.url}`);
    })