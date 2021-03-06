import React from 'react';
import NavBar from '../NavBar';
import Content from './Content';

import './css/home.css';

class Container extends React.Component {
	render() {
		return (
			<div id="container-fluid">
				<NavBar />
				<Content />
			</div>
    	);
	}
}

export default Container;
