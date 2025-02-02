import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import marked from 'marked'
import {DragSource, DropTarget} from 'react-dnd'
import constants from './constants';

import CheckList from './CheckList';

// 检验字符数量
let titlePropType = (props, propName, componentName)=>{
	if(props[propName]){
		let value = props[propName]
		if(typeof value !== 'string' || value.length > 3){
			return new Error(
					`${propName} 在 ${componentName} 上字符数量超多3个`
				)
		}
	}
}

// 创建spec对象
const cardDragSpec = {
	beginDrag(props) {
    return {
      id: props.id,
      status: props.status
    };
  },
  endDrag(props){
  	props.cardCallbacks.persistCardDrag(props.id, props.status)
  }
}

const cardDropSpec = {
	hover(props,monitor){
		const draggedId = monitor.getItem().id
		props.cardCallbacks.updatePosition(draggedId, props.id)
	}
}

// 创建collect对象
let collectDrag = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
	}
}

let collectDrop = (connect, monitor)=>{
	return {
		connectDropTarget: connect.dropTarget(),
	}
}

class Card extends Component{
	constructor(){
		super(...arguments);
		this.state = {
			showDetails: false
		}
	}

	// 显示与隐藏详细信息
	toggleDetails(){
		this.setState({showDetails: !this.state.showDetails})
	}

	render(){
		const {connectDragSource, connectDropTarget} = this.props

		let cardDetails;
		if(this.state.showDetails){
			cardDetails = (
					<div className='card_details'>
						<span dangerouslySetInnerHTML={{__html:marked(this.props.description)}}/>
						<CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={this.props.taskCallbacks}/>
					</div>
				)
		}

		let sideColor = {
			position: 'absolute',
			zIndex: -1,
			top: 0,
			bottom: 0,
			left: 0,
			width: 7,
			backgroundColor: this.props.color
		}
		return connectDropTarget(connectDragSource(
			<div className="card">
				<div style={sideColor}></div>
				<div className="card_edit">
					<Link to={'/edit/'+this.props.id}>&#9998;</Link>
				</div>
				<div className={
					this.state.showDetails? 'card_title card_title--is-open'
					: 'card_title'
				} onClick={this.toggleDetails.bind(this)}>
					{this.props.title}
				</div>
				<ReactCSSTransitionGroup transitionName="toggle"
																transitionEnterTimeout={250}
																transitionLeaveTimeout={250}>
					{cardDetails}
				</ReactCSSTransitionGroup>
			</div>
		))
	}
}

Card.propTypes = {
	id: PropTypes.number,
	title: titlePropType,
	description: PropTypes.string,
	color: PropTypes.string,
	title: PropTypes.string,
	tasks: PropTypes.arrayOf(PropTypes.object),
	taskCallbacks: PropTypes.object,
	cardCallbacks: PropTypes.object,
	connectDragSource: PropTypes.func.isRequired,
	connectDropTarget: PropTypes.func.isRequired
}

const dragHighOrderCard = DragSource(constants.CARD, cardDragSpec, collectDrag)(Card)

const dragDropHighOrderCard = DropTarget(constants.CARD, cardDropSpec, collectDrop)(dragHighOrderCard)

export default dragDropHighOrderCard