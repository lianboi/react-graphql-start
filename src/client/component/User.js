import React, {Component} from 'react'
import { graphql, withApollo, compose } from 'react-apollo'
import UserForm from './userForm'
import UserList from './userListing'

import fetchUser from '../query/fetchUser.graphql'
import createUser from '../query/userMutation.graphql'

class userContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }

    networkHit =  (payload) => {
        let {data} =  this.props.client.mutate({
            mutation: createUser,
            variables: payload
        })
        console.log( data )
    }

    getUser = (paylaod) => {
        let userList = this.state.user
        userList.push(paylaod)
        this.setState({
            user: userList
        })
        this.networkHit(paylaod)
        console.log( this.state.user, this.props )
    }

    render() {
        const {data: fetchUser, loading} = this.props
        return (
            <div className="panel panel-default" style={{'height': 'auto', 'width':'900px', 'margin': '0 auto'}}>
                <div className="panel-heading">User Form</div>
                <div className="panel-body">
                    <UserForm getUser = {this.getUser}/>
                </div>
                <div className="panel-body">
                    <UserList users = {fetchUser}/>
                </div>
            </div>
        )
    }
}

const fetchUserOptions = {
    fetchPolicy: 'network-only'

}
export default compose(
    withApollo,
    graphql(fetchUser, fetchUserOptions)
)(userContainer)