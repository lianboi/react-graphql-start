import React, {Component} from 'react'
import { graphql, withApollo, compose } from 'react-apollo'
import ToDoForm from './todoForm'
import ToDoList from './todoListing'

import fetchToDo from '../query/fetchToDo.graphql'

class TodoContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: []
        }
    }

    getToDo = (paylaod) => {
        let todoList = this.state.todo
        todoList.push(paylaod)
        this.setState({
            todo: todoList
        })
    }

    render() {
        const {data: fetchToDo, loading} = this.props
        console.log( this.props.data, 'get----' )
        return (
            <div className="panel panel-default" style={{'height': 'auto', 'width':'900px', 'margin': '0 auto'}}>
                <div className="panel-heading">ToDo Form</div>
                <div className="panel-body">
                    <ToDoForm getToDo = {this.getToDo}/>
                </div>
                <div className="panel-body">
                    <ToDoList Todos = {fetchToDo}/>
                </div>
            </div>
        )
    }
}

export default compose(
    withApollo,
    graphql(fetchToDo)
)(TodoContainer)