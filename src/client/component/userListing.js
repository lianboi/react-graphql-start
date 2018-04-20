import React, {Component} from 'react'

const UserListing = (props) => {
    const { users = [] } = props

    const userList = users.length > 0 && users.map((user, index) => {
            return (
                <tr className="success" key={index}>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.type}</td>

                </tr>
            )
        })

    return (
        <div>
            {
               users.length >0 ?
                   <table className="table">
                       <thead>
                           <tr>
                               <th>Sr No.</th>
                               <th>User name </th>
                               <th>User type </th>
                           </tr>
                       </thead>
                       <tbody>
                        {userList}
                       </tbody>
                   </table> : null
            }
        </div>
    )
}

export default UserListing