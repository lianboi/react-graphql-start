
import {
    GraphQLObjectType as ObjectType,
    GraphQLID as ID,
    GraphQLString as StringType,
} from 'graphql'

export const ToDoType = new ObjectType({
    name: 'Todo',
    fields: {
        _id: { type: ID },
        name: { type: StringType }
    }
})
