import React from 'react';

const Todos = ({todos, deleteTodo}) => {
   /*const handleOnclick = (e) => {
        

       }*/

    const todoList = todos.length?(
        todos.map(todo => {
            return(
             <div className="collection-item" key="todo.id">
               <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
             </div>
        )
    })
    ):(
        <p className="center"> You dont have any Todos</p>
    );
    return(
        <div className="todos collection">
          {todoList}
        </div>
    )
}

export default Todos;
