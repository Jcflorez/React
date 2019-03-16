import React, { Component } from 'react';
import '../  Task.css';
import firebase from '../Firebase';
import TaskItem from './TaskItem';
import TaskEdit from './TaskItem';
import TaskForm from './TaskForm';

class Tasks extends Component {
	owner : string;
	constructor(){
		super();
		owner = "Jclorez";
		this.state = {
			"tasks" : [],
			"tasks" : [],
			"db" : firebase.firestore()
		};
	}

	refresh(){
		let db = firebase.firestore();
		db.settings({timestampsInSnapshots: true});  
		db.collection("tasks").get().then( (querySnapshot) => {
			let tasks = [];
			querySnapshot.forEach( doc => {
				console.log(doc.id, " => ", doc.data());
				tasks.push(doc.data());
			});
			this.setState({"tasks":tasks});
		});
	}
	/*componentWillMount(){
		this.state.db.settings({timestampsInSnapshots: true});
		this.refresh();
	}*/
	componentWillUpdate(){
		this.state.db.settings({timestampsInSnapshots: true});
		this.refresh();
	}


	handleGuardar(task){
		this.state.db.collection("tasks").doc(task.id).set(task);
		this.refresh();
	}

	handleDelete(id){
		this.state.db.collection("tasks").doc(id).delete();
				this.refresh();		
	}
	handleEdit(task){
		this.setState({
			"TaskEdit" : task
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
	      	<h1> Tareas de {this.props.owner}</h1>	
	        <ul className="list-group">
	        	<TaskForm onGuardar={this.handleGuardar.bind(this)}/>
	        	{taskList}
	        </ul>
	      </div>
	    );

	  }
}


export default Tasks;