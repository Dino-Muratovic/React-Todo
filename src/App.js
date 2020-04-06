import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
    super();
  //
    this.state = {
      toDoTasks // set the state to be blank strings     
    }
  }
  

    //EVENT HANDLERS HERE
    addTodoItem = (e,item) => {
      e.preventDefault();
      // console.log(`this is e`, e);
      // console.log(`this is item`, item);
      const newTodoItem = {
        task: '',
        id: Date.now(),
        completed: false
      };
      this.setState({
        toDoTasks: [...this.state.toDoTasks, newTodoItem]
      })

    }
    


   
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodoItem={this.addTodoItem}/>

        {/* pass down the state to ToDoList */}
        <TodoList tasksToAdd={this.state.toDoTasks}/>
      </div>
    );
  }
}

export default App;
