
import {
    GraphQLObjectType as ObjectType,
    GraphQLID as ID,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull
} from 'graphql'

export const userType = new ObjectType({
    name: 'User',
    fields: {
        _id: { type: new NonNull(ID) },
        name: { type: StringType },
        city: {type: StringType}
    }
})
