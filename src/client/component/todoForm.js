import React, {Component} from 'react'
import { graphql, withApollo, compose } from 'react-apollo'

class ToDoListing extends Component {
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

    addToDo = () => {
        this.props.getToDo({
            name: this.state.name
        })
    }

    render() {
        const {name} = this.state
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
                <div className="col-md-4" style={{'marginTop': '23px'}}>
                    <button type="button"
                            onClick={this.addToDo}
                            className="btn btn-success">
                        Add ToDo
                    </button>
                </div>
            </div>
        )
    }
}

export default compose(withApollo)(ToDoListing)