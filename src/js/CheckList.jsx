import React, { Component } from 'react';
import {render} from 'react-dom';

class CheckList extends Component{
	render(){
		let tasks=this.props.tasks.map((value,index) =>(
			<li className="checklist_task" key={index}>
				<input type="checkbox"   defaultChecked={value.done}/>
				{value.name}
				<a href="#" className="checklist_task--remove"/>
			</li>
		))
		return(
			<div className="checklist">
				<ul>{tasks}</ul>
			</div>
		)
	}
}
export default CheckList;