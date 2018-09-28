import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../Menu';

class Teste extends React.Component {
	
	render() {
		return (
				<div className="container-fluid">
			      OPA
			    </div>
    	);
	}
}

Teste.propTypes = {
	title: PropTypes.string
};

Teste.defaultProps = {
		title: "Home"
};

export default Teste;