import React, { Component } from 'react';
import {render} from 'react-dom';

import KanbanBoard from './KanbanBoard';
import '../css/style.css';

let cardsList=[
	{
		id:1,
		title:"Card one title",
		description:"Code along with the samples in the book",
		status:"todo",
		tasks:[
			{id:1,name:"Task one",done:true},
			{id:2,name:"Task two",done:false},
			{id:3,name:"Task three",done:false}
		]
	},
	{
		id:2,
		title:"Card two title",
		description:"I should read the whole book",
		status:"in-progress",
		tasks:[]
	},
	{
		id:3,
		title:"Card three title",
		description:"Card detailed description",
		status:"done",
		tasks:[]
	}
]

render(<KanbanBoard cards={cardsList}/>,document.getElementById('root'));