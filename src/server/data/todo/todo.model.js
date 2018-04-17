import  Mongoose from 'mongoose'

const TodoSchema = new Mongoose.Schema( {
    name: {
        type: String
    }
})

module.exports= Mongoose.model('Todo',TodoSchema)