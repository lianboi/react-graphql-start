
import {userType} from './user.type'
import User from './user.model'

export const user = {
    type: userType,
    resolve () {
        let user = User.findOne().lean().exec()
        return user
    }
}