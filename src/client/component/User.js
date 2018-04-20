import React, {Component} from 'react'
import { graphql, withApollo, compose } from 'react-apollo'
import UserForm from './userForm'
import UserList from './userListing'
import _ from 'lodash'

import fetchUser from '../query/fetchUser.graphql'
import createUser from '../query/userMutation.graphql'

class userContainer extends Component {

    networkHit =  async (payload) => {
        let {data} =  await this.props.client.mutate({
            mutation: createUser,
            variables: payload
        })
    }

    getUser = (payload) => {
        this.props.addUser({
            variables: payload,
            optimisticResponse: {
                createUser: {
                    name: payload.name,
                    type: payload.type,
                    __typename: 'User'
                }
            },
            update: (store, { data: { createUser } }) => {

                const data = store.readQuery({
                    query: fetchUser,
                })

                let _data = ''
                if(data && data.fetchUser) {
                    payload['__typename'] = 'User'
                    _data = _.cloneDeep(data)
                    _data.fetchUser.unshift(payload)
                }

                store.writeQuery({
                    query: fetchUser,
                    data: Object.assign({}, _data)
                })
            }
        })
        //this.networkHit(paylaod)
    }

    render() {
        const {data: fetchUser, loading} = this.props

        return (
            <div className="panel panel-default" style={{'height': 'auto', 'width':'900px', 'margin': '0 auto'}}>
                <div className="panel-heading">User Form</div>
                <div className="panel-body">
                    <UserForm getUser = {this.getUser}/>
                </div>
                {
                    !loading ?
                        <div className="panel-body">
                            <UserList users = {fetchUser.fetchUser}/>
                        </div> : null
                }
            </div>
        )
    }
}

const fetchUserOptions = {
    fetchPolicy: 'network-only'
}

const createUserOption = {
    name: 'addUser'
}

export default compose(
    withApollo,
    graphql(fetchUser, fetchUserOptions),
    graphql(createUser, createUserOption)
)(userContainer)