
import {UserType} from './User.type'
import User from './User.model'
import {
    GraphQLList as List,
} from 'graphql'

export const fetchUser = {
    type: new List(UserType),
    async resolve () {
        let user = await User.find().lean().exec()
        return user
    }
}