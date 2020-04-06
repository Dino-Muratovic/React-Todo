// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

// import todo here

const TodoList = props => {

    console.log(props)
    return(
        <>
        <div>This is TodoList:</div>
            
        <ToDo/>
        </>
    )
}

export default TodoList;
