import React from 'react';
import TodoForm from './components/TodoForm';

//Create todotasks variable and set the value to empty strings.
const toDoTasks = [
  {
    task: '',
    id: Date.now(),
    completed: false
  }    
]  

class App extends React.Component {   
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // you will need a place to store your state in this component.
  constructor() {
    super ();
  //
    this.state = {
      toDoTasks // set the state to be blank strings     
    }
   
  //add todo function here
  // addToDo = (e, item) => {
  //   e.preventDefault();
  //   console.log(e)
  // } 
    
    
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
