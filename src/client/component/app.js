import React, { Component } from 'react'
import User from './User'


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>User Listing</h1>
                <User/>
            </div>
        )
    }
}

export default App