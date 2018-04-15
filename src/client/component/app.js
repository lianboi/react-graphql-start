import React, { Component } from 'react'
import ToDoForm from './todoForm'


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Start To Do App</h1>
                <p> Start the Application </p>
                <ToDoForm/>
            </div>
        )
    }
}

export default App