
import {UserType} from './User.type'
import User from './User.model'
import {
    GraphQLString as String
} from 'graphql'

export const createUser = {
    type: UserType,
    args: {
        name: {type: String},
        type: { type: String }
    },
    async resolve({request},params) {
        let user = await User.create({
            name: params.name,
            type: params.type
        })

        return user
    }
}