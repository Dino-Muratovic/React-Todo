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
    //This function with all the inner functionality including the state is getting passed down to TodoForm
    addTodoItem = (e,item) => {
      e.preventDefault();
      // console.log(`this is e`, e);
      // console.log(`this is item`, item);
      const newTodoItem = {
        task: item,
        id: Date.now(),
        completed: false
      };
      this.setState({
        toDoTasks: [...this.state.toDoTasks, newTodoItem] // when user inputs whatever info it replaces the old empty usestate array with a new input information
      })
}

    //Toggle to do

    toggleTodo = itemId => {
      console.log(itemId);
    // map over array
    // when we find the item we clicked, toggle the purchased field
    // otherwise return the item untouched
      this.setState({
        toDoTasks: this.state.toDoTasks.map(item => {
          console.log(`this is item inside map`, item)
          if (itemId === item.id) {
            return {
              ...item,
              completed: !item.completed              
            };
          }
          return item;
        })
      })
    }

    //Clear completed
    clearCompleted = e => {
      e.preventDefault();
      // if item is completed (item.completed is true) then filter out
      this.setState({
        toDoTasks: this.state.toDoTasks.filter(item => !item.completed)
      })
    }
    


   
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* pass down the event handler to the TodoForm  */}
        <TodoForm addTodoItem={this.addTodoItem}/> 

        {/* pass down the state to ToDoList */}
        <TodoList
         toDoTasks={this.state.toDoTasks}
         toggleTodo={this.toggleTodo}
         clearCompleted={this.clearCompleted}
         
         />
      </div>
    );
  }
}

export default App;
