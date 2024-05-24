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
    typeDefs: loadedFiles,
    resolvers: {
        Query:{
            //parent에는 root에 들어 있는 부분이 있는 거다 
            posts: (parent, args, context, info) =>{
                return parent.posts
            },
            comments: (parent, args, context, info) => {
                return parent.comments
            }
        }
    }
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

