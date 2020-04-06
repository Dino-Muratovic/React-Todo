import React from 'react';
  

class TodoForm extends React.Component {   
  
  constructor() {
    super ();
//set up state here
    this.state = {
      item:''   
    }    
}

//Submit item
submitItem = e => {
    e.preventDefault();
    this.setState({ item: ''});
    this.props.addTodoItem(e, this.state.item)
}

  render() {
    return (
        <form onSubmit={this.submitItem}>
            <input
                type="text"
                name="todo"
            />
            
            
            <button>Add</button>
            <button>Clear</button>
        </form>  
    );
  }
}

export default TodoForm;






