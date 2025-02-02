import React from 'react';
import {render} from 'react-dom';
import { Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import KanbanBoardContainer from './KanbanBoardContainer.jsx';
import KanbanBoard from './KanbanBoard';
import EditCard from './EditCard';
import NewCard from './NewCard';
import '../css/style.css'

render((
	<Router history={createBrowserHistory()}>
		<Route component={KanbanBoardContainer}>
			<Route path='/' component={KanbanBoard}>
				<Route path='new' component={NewCard}/>
				<Route path='edit/:card_id' component={EditCard}/>
			</Route>
		</Route>
	</Router>
	), document.getElementById('root'));