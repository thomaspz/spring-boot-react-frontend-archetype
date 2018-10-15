import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css'
import { HashRouter, Switch, Route } from 'react-router-dom';

const MainLayout = <span>
	<HashRouter>
		<h1 className="test">Hallo Welt</h1>
		{/* <Switch>
			<Route exact path='/path1' component={MyComponent} />
			<Route path='/path1/edit/:id' component={MyComponentEdit} />
		</Switch> */}
	</HashRouter>
</span>;


ReactDOM.render((
	MainLayout
	),
	document.querySelector('#container'));
