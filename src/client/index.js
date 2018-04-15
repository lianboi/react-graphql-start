import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import { ApolloProvider } from 'react-apollo'
//import ApolloClient, {createNetworkInterface} from 'apollo-client'
import ApolloClient from "apollo-boost"


const client = new ApolloClient({
    uri:  'http://localhost:4000/graphql'
})

ReactDom.render(
   <ApolloProvider client={client} >
       <App />
   </ApolloProvider>,
    document.getElementById('app')
)