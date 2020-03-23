import React, { Component } from 'react'

export class AddToDo extends Component {
    


    state = {
        name:null
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
      
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.addToDo(this.state);
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo: </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default AddToDo
