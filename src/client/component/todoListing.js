import React, {Component} from 'react'

const ToDoListing = (props) => {
    const { Todos = [] } = props

    const todoList = Todos.length > 0 && Todos.map((todo, index) => {
            return (
                <tr className="success" key={index}>
                    <td>{index+1}</td>
                    <td>{todo.name}</td>
                </tr>
            )
        })

    return (
        <div>
            {
               Todos.length >0 ?
                   <table className="table">
                       <thead>
                           <tr>
                               <th>Sr No.</th>
                               <th>Todo name </th>
                           </tr>
                       </thead>
                       <tbody>
                        {todoList}
                       </tbody>
                   </table> : null
            }
        </div>
    )
}

export default ToDoListing