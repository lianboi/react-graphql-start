import React, { Component } from 'react'
import Todo from './Todo'


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Start To Do App</h1>
                <Todo/>
            </div>
        )
    }
}

export default App