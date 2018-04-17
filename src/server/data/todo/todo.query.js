
import {ToDoType} from './todo.type'
import ToDo from './todo.model'
import {
    GraphQLList as List,
} from 'graphql'

export const fetchToDo = {
    type: new List(ToDoType),
    resolve () {
        let todo = ToDo.find().lean().exec()
        return todo
    }
}