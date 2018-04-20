import  Mongoose from 'mongoose'

const UserSchema = new Mongoose.Schema( {
    name: {
        type: String
    },
    type: {
        type: String
    }
})

module.exports= Mongoose.model('User',UserSchema)