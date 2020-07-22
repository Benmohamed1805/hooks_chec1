import React from 'react';

const ToDoComp = (props) => {
    return (
    <ul>
        {props.todos.map(el => <li key={el.id}>
            <span> {el.item}</span>
            <button onClick={() => props.removeItem(el.id)}> Delete </button>
            <button onClick={() => props.EditItem(el.id)}> Edit </button>
        </li>  )} 
         </ul>
    );
}
export default ToDoComp;