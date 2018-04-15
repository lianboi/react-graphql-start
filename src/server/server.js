import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import schema from './data/schema'
import expressGraphQL from 'express-graphql'
import Mongoose from 'mongoose'

const app = express()
const port = 4000

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

Mongoose.connect('mongodb://localhost:27017/react-graphql-start')
Mongoose.Promise = global.Promise

Mongoose.connection.on('open',(err,data)=>{
    console.log('successfully connected Mongoose')
});
Mongoose.connection.on('error',(err,data)=>{
    console.log('Error in connection ',err)
})

app.use('*', cors({ origin: 'http://localhost:9000' }));

const graphqlMiddleware = expressGraphQL(req => ({
    schema,
    graphiql: true,
    rootValue: { request: req },
    pretty: true,
}));

app.use('/graphql', graphqlMiddleware)

app.listen(port, () => console.log(`Listening on port ${port}`))