import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from './screens/home/Home';
import HomeCliente from './screens/pessoas/clientes/Home';
import NoMatch from './components/NoMatch';
import './css/bootstrap/css/bootstrap.css';

const history = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={ Home } />
					<Route path="/pessoas/clientes/" exact component={ HomeCliente } />
					<Route component={ NoMatch } />
				</Switch>
			</Router>			
		);
	}
}

export default App;
