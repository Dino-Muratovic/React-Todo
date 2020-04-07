import React from 'react';
  

class TodoForm extends React.Component {   
  
  constructor() {
    super ();
//set up state here
    this.state = {
      todo:''   
    }    
}

//Add Item on click event
submitTodo = e => {
    e.preventDefault();
    this.setState({ todo: ''});
    //calling function that comes from app.js addToDoItem function so we have to use props to use it inside of this function 
    this.props.addTodoItem(e, this.state.todo) //e is being passed as argument based on function parameters indicated in addTodoItem function(1st argument), this.state.todo = item (2nd argument)
}

//Handle changes event
onInputChange = event => {
    console.log(`this is value`, event.target.value)
    this.setState({[event.target.name]: event.target.value})
}



  render() {
    return (
        <form onSubmit={this.submitTodo}>
            <input
                type="text"
                name="todo"
                onChange={this.onInputChange}
                value={this.state.todo}
            />
            
            
            <button>Add</button>
            <button>Clear</button>
        </form>  
    );
  }
}

export default TodoForm;






