import React, { Component } from 'react';

class TaskForm extends Component {

  componentWillUpdate(){

  	console.log(this.props.task);
  	console.log(this.state);

  }

  componentWillMount(){
  	this.setState({
  		id: this.props.task.id,
  		name: this.props.task.name,
  		category: this.props.task.category,
      project: this.props.task.project 
  		});
  }

  componentWillReceiveProps(props){
  	this.setState({
  		id: props.task.id,
  		name: props.task.name,
  		category: props.task.category,
      project: props.task.project 
  		});
  }

  guardar(e){
  	e.preventDefault();
  	var id;
  	console.log(id); 

  	if (this.state.id===""){
  		id=(new Date().getTime()).toString(16);
  	}else{
  		id=this.state.id;
  	}
  	let task = {
  		id: id,
  		category: this.state.category,
  		name: this.state.name,
      project: this.state.project
  	};   	


  	this.props.onGuardar(task);

	this.setState({
  		id: "",
  		name: "",
  		category: "",
      project: ""
	})


	this.setState({
  		id: "",
  		name: "",
  		category: "",
      project: ""			
	})

  	console.log(task);
  }  

updateInput(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}

  render() {
    return (
      <div className="TaskForm">
      <h3>Adicionar Tarea</h3>
      <form onSubmit={this.guardar.bind(this)} >
       <div className="input-group input-group mb-3">
            <input type="hidden" name="id" value={this.state.id}  onChange={this.updateInput.bind(this)} />
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Nombre :</span>
            </div>
          	<div className="form-input">
    		      	<input type="text" name="name" value={this.state.name}  onChange={this.updateInput.bind(this) }/>
    	      </div>
          	
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Proyecto :</span>
            </div> 
            <div className="form-input">
                <input type="text" name="project" value={this.state.project} onChange={this.updateInput.bind(this)} />
            </div>
       </div>

        <div className="input-group input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">Categoria :</span>
            </div>
            <div className="form-input">
              <input type="text" name="category" value={this.state.category} 
                     onChange={this.updateInput.bind(this)} />
            </div>
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">Categoria :</span>
            </div>
            <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Proyecto1</option>
            <option value="lime">Proyecto2</option>
            <option value="coconut">Proyecto3</option>
            <option value="mango">Proyecto4</option>
          </select>
        </div>
      	<button className="btn btn-info">Agregar</button>
      </form>
      </div>
    );
  }
}

export default TaskForm;