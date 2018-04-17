
import {ToDoType} from './todo.type'
import ToDo from './todo.model'
import {
    GraphQLString as String
} from 'graphql'

export const createToDo = {
    type: ToDoType,
    args: {
        name: {type: String}
    },
    async resolve({request},params) {
        console.log( params )
        let todo = await ToDo.create({
            name: params.name
        })

        return todo
    }
}