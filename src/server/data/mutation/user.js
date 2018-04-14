import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

// import { postType } from '../../types/post'
// import UserModel from '../../../models/post'

import { userType } from '../type'

export default {
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