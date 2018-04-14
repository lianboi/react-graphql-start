
import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList
} from 'graphql'


export const userType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        email: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        }
    })
})


export const userInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: () => ({
        email: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        }
    })
})