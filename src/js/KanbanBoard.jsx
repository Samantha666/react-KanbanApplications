import React, { Component,PropTypes } from 'react';
import {render} from 'react-dom';

import List from './List';

class KanbanBoard extends Component{
	render(){
		return (
			<div className="app">
				<List id='todo' title="要做某事" cards={this.props.cards.filter((card) =>card.status =="todo")}/>
				<List id='in-progress' title="正在进行" cards={this.props.cards.filter((card) =>card.status =="in-progress")}/>
				<List id='done' title="已完成的" cards={this.props.cards.filter((card) =>card.status =="done")}/>
			</div>
		)
	}
}
KanbanBoard.propTypes={
	cards:PropTypes.arrayOf(PropTypes.object)
}
export default KanbanBoard;