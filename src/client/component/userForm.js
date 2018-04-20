import React, {Component} from 'react'
import { graphql, withApollo, compose } from 'react-apollo'

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            type: ''
        }
    }

    changeNameHandler = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value
        this.setState(state)
    }

    addUser = () => {
        this.props.getUser({
            name: this.state.name,
            type: this.state.type
        })
    }

    render() {
        const {name, type} = this.state
        return (
            <div className="row">
                <div className="form-group col-md-8" style={{width: '420px'}}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.changeNameHandler}
                        className="form-control"
                        value= {name}
                        id="usr"/>
                </div>
                <div className="form-group col-md-8" style={{width: '420px'}}>
                    <label>Type:</label>
                    <input
                        type="text"
                        name="type"
                        onChange={this.changeNameHandler}
                        className="form-control"
                        value= {type}
                        id="usr"/>
                </div>
                <div className="col-md-4" style={{'marginTop': '23px'}}>
                    <button type="button"
                            onClick={this.addUser}
                            className="btn btn-success">
                        Add User
                    </button>
                </div>
            </div>
        )
    }
}

export default compose(withApollo)(UserForm)