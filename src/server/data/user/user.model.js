import  Mongoose from 'mongoose'

const UserSchema = new Mongoose.Schema( {
    name: {
        type: String
    },
    city: {
        type: String
    }

})
module.exports= Mongoose.model('User',UserSchema)