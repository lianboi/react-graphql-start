import { userType } from '../type'

import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

export const userMutation = {
    type: userType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const removeduser = {
            return : 'done'
        }
        if (!removeduser) {
            throw new Error('Error removing user')
        }
        return removeduser;
    }
}