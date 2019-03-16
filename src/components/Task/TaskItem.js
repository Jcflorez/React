import React, { Component } from 'react';

class TaskItem extends Component {

  taskDelete(){
  	this.props.onDelete(this.props.task.id);
  }

  taskEdit(){
  	this.props.onEdit(this.props.task);
  }

  render() {
    return (
    	<div className="col-md-4">
        <div className="mt-2  border border-white padding-left-1">
          {this.props.task.name} - {this.props.task.category}
          <button onClick={this.taskDelete.bind(this)}
           className="btn btn-danger float-right btn-sm">Eliminar</button>
          <button onClick={this.taskEdit.bind(this)}
           className="btn btn-info  float-right btn-sm">Editar</button>
        </div>
      </div>
    );
  }
}

export default TaskItem;