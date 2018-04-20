
import {
    GraphQLObjectType as ObjectType,
    GraphQLID as ID,
    GraphQLString as StringType,
} from 'graphql'

export const UserType = new ObjectType({
    name: 'User',
    fields: {
        _id: { type: ID },
        name: { type: StringType },
        type: { type: StringType }
    }
})
