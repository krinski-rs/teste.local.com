import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
	render() {
		return (
			<div className={ this.props.className }>
				<h2>{ this.props.title }</h2>
				<p className="lead">{ this.props.descricao }</p>
			</div>
    	);
	}
}


Header.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	descricao: PropTypes.string
};

Header.defaultProps = {
	className: 'py-5 text-center',
	title: 'Form',
	descricao: ''
};
export default Header;