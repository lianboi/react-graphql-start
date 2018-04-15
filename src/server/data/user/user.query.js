
import {userType} from './user.type'
import User from './user.model'

const user = {
    type: userType,
    resolve () {
        let user = User.findOne().lean().exec()
        return user
    }
}

export default user