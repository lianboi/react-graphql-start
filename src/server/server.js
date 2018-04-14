import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import schema from './data/schema'
import expressGraphQL from 'express-graphql'

const app = express()
const port = 9000

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const graphqlMiddleware = expressGraphQL(req => ({
    schema,
    graphiql: true,
    rootValue: { request: req },
    pretty: true,
}));

app.use('/graphql', graphqlMiddleware)

app.listen(port, () => console.log(`Listening on port ${port}`))