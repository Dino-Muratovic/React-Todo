import React from 'react';
  

class TodoForm extends React.Component {   
  
  constructor() {
    super ();
//set up state here
    this.state = {
         
    }   
    
    
  }
  render() {
    return (
        <form>
        <input
            type="text"
            name="todo"
        />
        <br/>
        
        <button>Add</button>
        <button>Clear</button>
        </form>  
    );
  }
}

export default TodoForm;






