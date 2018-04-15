import React, {Component} from 'react'
import { graphql, withApollo, compose } from 'react-apollo'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    changeNameHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        console.log( this.props )
        const {name} = this.state
        return (
            <div>
                <input name="name"
                       onChange={this.changeNameHandler}
                       value= {name}/>
            </div>
        )
    }
}

export default compose(withApollo)(TodoForm)