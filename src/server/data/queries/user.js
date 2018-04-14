import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import { userType } from '../type'

export default {
    type: userType,
    args: {
        name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        console.log(params)
        return {
            name: 'one'
        }
        //return User.findById(params.id).exec();
    }
}