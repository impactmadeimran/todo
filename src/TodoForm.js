import React, { Component } from 'react'

 class todoForm extends Component {
     state = {
         content : ""
     }
     handlechange = (e) =>{
        this.setState({
            content : e.target.value
        })
     }
     handlesubmit = (e) =>{
         e.preventDefault();
         this.props.addTodo(this.state)
         this.setState({
             content : ''
         })
     };

    render() {
        return (
            <div>
                <form onSubmit = {this.handlesubmit}>
                    <input type = "text" placeholder = "Enter Todo" onChange = {this.handlechange} value ={this.state.content}></input>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

export default todoForm
