import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'

const client = new ApolloClient({
    link: HttpLink({
        uri: 'http://localhost:4000/graphql'
    })
})

ReactDom.render(
   <ApolloProvider client={client} >
       <App />
   </ApolloProvider>,
    document.getElementById('app')
)