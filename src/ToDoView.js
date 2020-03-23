import React from 'react'


function ToDoView({toDos}) {
    //const {toDos} = props.toDos
    console.log(toDos)
    const toDoItems = toDos.map((toDo) => {
        return(
        <div className="collection-item" key={toDo.id}>{toDo.name} </div>
        )
    }
   
    )
    return (
        <div className="collection">
            {toDoItems}
        </div>
    )
}



export default ToDoView

