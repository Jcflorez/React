//Dependencies
import React, { Component } from 'react';
import '../Global/css/Task.css';
import firebase from '../Firebase';

import TaskItem from './TaskItem'
import TaskForm from './TaskForm'

class Tasks extends Component {

  constructor(){
  	super();

  	this.state = {
  		"taskEdit" : {
  			category: "",
  			name:"",
  			id: ""
  			},
  		"tasks" : [],
  		"db": firebase.firestore() 
  	};

  }

  componentWillMount(){
  	this.state.db.settings({timestampsInSnapshots: true});
  	this.refresh();
  }

  refresh(){
  	this.state.db.collection("tasks").get().then( (querySnapshot) => {
  		let tasks = [];
	    querySnapshot.forEach( doc => {
	        console.log(doc.id, " => ", doc.data());
	        tasks.push(doc.data());
	    });
	    this.setState({"tasks": tasks});
	}); 	
  }

  handleGuardar(task){
//  	db.collection("tasks").add(task);
	this.state.db.collection("tasks").doc(task.id).set(task);
  	this.refresh();
  }

  handleDelete(id){
  	this.state.db.collection("tasks").doc(id).delete();
  	this.refresh();
  }

  handleEdit(task){
  	console.log(task);
  	this.setState({
  		"taskEdit": task
  	});
  }

  render() {
  	let taskList = this.state.tasks.map( (task) => {
	  		return (
	  			<TaskItem  
	  				key={task.id} task={task}
	  				onDelete={this.handleDelete.bind(this)}
	  				onEdit={this.handleEdit.bind(this)}
	  				 />)
	  	}
  		);
 
    return (
      <div className="container Tasks">
        <TaskForm task={this.state.taskEdit} onGuardar={this.handleGuardar.bind(this)} />
        <h3>Tareas de {this.props.owner} </h3>
        <div className="container">
          <div className="row">
              {taskList}
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;

