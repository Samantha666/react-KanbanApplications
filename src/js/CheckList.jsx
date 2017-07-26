import React, { Component,PropTypes } from 'react';
import {render} from 'react-dom';

class CheckList extends Component{
	checkInputKeyPress(evt){
		if(evt.key=='Enter'){
			this.props.taskCallbacks.add(this.props.cardId,evt.target.value)
			evt.target.value='';
		}
	}
	render(){
		let tasks=this.props.tasks.map((task,taskIndex) =>(
			<li className="checklist_task" key={task.id}>
				<input type="checkbox"  checked={task.done} onChange={this.props.taskCallbacks.toggle.bind(null,this.props.cardId,task.id,taskIndex)}/>
				{task.name}{" "}
				<a href="#" className="checklist_task--remove" onClick={this.props.taskCallbacks.delete.bind(null,this.props.cardId,task.id,taskIndex)}/>
			</li>
		))
		return(
			<div className="checklist">
				<ul>{tasks}</ul>
				<input type="text" className="checklist--add-task" placeholder="然后输入类型添加一个任务"
				onKeyPress={this.checkInputKeyPress.bind(this)}/>
			</div>
		)
	}
}
CheckList.propTypes={
	cardId:PropTypes.number,
	tasks:PropTypes.array,
	taskCallbacks:PropTypes.object
}
export default CheckList;