import React, { Component } from 'react';
import {render} from 'react-dom';

import KanbanBoardContainer from './KanbanBoardContainer';
import '../css/style.css';

//let cardsList=[
//	{
//		id:1,
//		title:"读书",
//		description:"我应该读**整**本书",
//		color:"#BD8D31",
//		status:"in-progress",
//		tasks:[]
//	},
//	{
//		id:2,
//		title:"编写一些代码",
//		description:"随着书中的样本代码可以找到完整的源代码在 [github](https://github.com/pro-react)",
//		color:"#3A7E28",
//		status:"todo",
//		tasks:[
//			{id:1,name:"例子列表",done:true},
//			{id:2,name:"看板例子",done:false},
//			{id:3,name:"我自己的实验",done:false}
//		]
//	}
//]

render(<KanbanBoardContainer/>,document.getElementById('root'));

