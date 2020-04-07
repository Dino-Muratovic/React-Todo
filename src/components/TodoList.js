// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

// import todo here

const TodoList = props => {

    console.log(`this is props inside TodoList`, props)
    return(
        <>
        <div>This is TodoList:</div> 
            {props.toDoTasks.map(item => 
                // {console.log(`===>`,item.id)}
                (<ToDo key={item.id} item={item} toggleTodo={props.toggleTodo}/>)
            )}                   
         </>
    )
}

export default TodoList;
