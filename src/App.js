import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './App.css'


class App extends Component {
  
state = {
  todos :[
  {id :1 , content : 'Eat breakfast'},
  {id : 2, content : 'Take a walk'}
]}

deleteTodo = (id) =>{
  const todos = this.state.todos.filter(todo =>{
 return todo.id !== id   
}
  )
  this.setState({
    todos
  })
}
addTodo = (todo) => {
  todo.id = Math.random();
  let todos = [...this.state.todos,todo]
  this.setState({
    todos
  })
}
  render() {
    return (
      <div>
        <h1>TODO'S</h1>
        <Todo deleteTodo = {this.deleteTodo} todos = {this.state.todos}/>
        <TodoForm addTodo = {this.addTodo}/>
      </div>
    )
  }
}

export default App




