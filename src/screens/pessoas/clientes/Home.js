import React from 'react';
import NavBar from '../../NavBar';
import Content from './Content';


class Home extends React.Component {
	render() {
		return (
			<div id="container-fluid">
				<NavBar />
				<Content title={ "Home Cliente" } />
			</div>
    	);
	}
}

export default Home;
