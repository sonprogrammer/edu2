const { makeExecutableSchema } = require('@graphql-tools/schema');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files'); 

const app = express();

const port = 4000

const loadedFiles = loadFilesSync("**/*",{
    extensions: ['graphql']
})

const schema = makeExecutableSchema({
    typeDefs: loadedFiles
})

const root = {
    posts: require('./posts/posts.model'),
    comments: require('./comments/comments.model')
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))



app.listen(port, () =>{
    console.log('listening on port 4000');
})

