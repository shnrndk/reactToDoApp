import React, { Component } from 'react'
import ToDoView from './ToDoView'
import AddTodo from './AddToDo'
export class App extends Component {
  state = {
    toDos : [
      {name:'Clean the room',id:1},
      {name:'Washing the car',id:2}
    ]
  }

  addToDo = (toDo) =>{
    if(this.state.toDos.length===0) toDo.id = 0
    else toDo.id = this.state.toDos.length+1;
    
    let toDos = [...this.state.toDos,toDo];
    this.setState({
      toDos : toDos
    }) 
  }

  deleteItem = (id)=>{
    console.log(id)
    let toDos = this.state.toDos.filter((toDo)=>{
      return toDo.id!==id
    })

    this.setState({
      toDos:toDos
    })
  }

  render() {
    return (
      <div className="container">
        <h2 className="center-align teal-text text-lighten-1">To Do App</h2>
        <AddTodo addToDo={this.addToDo}/>
        <ToDoView toDos={this.state.toDos} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App
