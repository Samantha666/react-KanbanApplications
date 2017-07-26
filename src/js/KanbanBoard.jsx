import React, { Component,PropTypes } from 'react';
import {render} from 'react-dom';

import List from './List';

class KanbanBoard extends Component{
	render(){
		return (
			<div className="app">
				<List title="要做某事" taskCallbacks={this.props.taskCallbacks} cards={this.props.cards.filter((card) =>card.status =="todo")}/>
				<List title="正在进行" taskCallbacks={this.props.taskCallbacks} cards={this.props.cards.filter((card) =>card.status =="in-progress")}/>
				<List title="已完成的" taskCallbacks={this.props.taskCallbacks} cards={this.props.cards.filter((card) =>card.status =="done")}/>
			</div>
		)
	}
}
KanbanBoard.propTypes={
	cards:PropTypes.arrayOf(PropTypes.object),
	taskCallbacks:PropTypes.object
}
export default KanbanBoard;