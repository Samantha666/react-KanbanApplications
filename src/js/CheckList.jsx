import React, { Component,PropTypes } from 'react';
import {render} from 'react-dom';

class CheckList extends Component{
	render(){
		let tasks=this.props.tasks.map((task) =>(
			<li className="checklist_task" key={task.id}>
				<input type="checkbox"   defaultChecked={task.done}/>
				{task.name}{" "}
				<a href="#" className="checklist_task--remove"/>
			</li>
		))
		return(
			<div className="checklist">
				<ul>{tasks}</ul>
				<input type="text" className="checklist--add-task" placeholder="然后输入类型添加一个任务"/>
			</div>
		)
	}
}
CheckList.propTypes={
	cardId:PropTypes.number,
	tasks:PropTypes.arrayOf(PropTypes.object)
}
export default CheckList;