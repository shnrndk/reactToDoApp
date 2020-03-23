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
    if(this.state.toDos.length==0) toDo.id = 0
    else toDo.id = this.state.toDos.length+1;
    
    let toDos = [...this.state.toDos,toDo];
    this.setState({
      toDos : toDos
    }) 
  }

  deleteItem = (id)=>{
    console.log(id)
  }

  render() {
    return (
      <div className="container">
        <AddTodo addToDo={this.addToDo} deleteItem={this.deleteItem} />
        <ToDoView toDos={this.state.toDos}/>
      </div>
    )
  }
}

export default App
