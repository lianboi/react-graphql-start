import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {ApolloClient} from 'apollo-client'
//import ApolloClient, {createNetworkInterface} from 'apollo-client'
//import ApolloClient from "apollo-boost"


const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:4000/graphql'
    }),
    cache: new InMemoryCache(),

})

ReactDom.render(
   <ApolloProvider client={client} >
       <App />
   </ApolloProvider>,
    document.getElementById('app')
)