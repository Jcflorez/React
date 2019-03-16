//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
import Task from './components/Task';
import Project from './components/Project';
import Inicio from './components/Inicio';
import Page404 from './components/Page404';

const AppRoutes = () => 
	<App>
		<Switch>
			<Route exact path="/project" component={Project} />
			<Route exact path="/" component={Inicio} />
			<Route exact path="/task" component={Task} />
			<Route exact component={Page404} />
		</Switch>
	</App>;

export default AppRoutes;