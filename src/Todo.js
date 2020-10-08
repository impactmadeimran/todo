import React from 'react'

const Todo = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(
            todo => {return(
                <div>
                    <span onClick = {() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )}
        )
    ) : (<p>You have no todo's</p>)
    return (
        <div>
           {todoList} 
        </div>
    )
}

export default Todo
