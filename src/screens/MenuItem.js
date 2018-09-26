import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MenuItem extends React.Component {
	
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<li className="nav-item">
				<Link className={ "nav-link "+this.props.linkClass } to={ this.props.href }>
					<FontAwesomeIcon icon={ this.props.icon }  />&nbsp;{ this.props.text }
				</Link>
			</li>
    	);
	}
}

MenuItem.propTypes = {
	href: PropTypes.string.isRequired,
	icon: PropTypes.object,
	text: PropTypes.string.isRequired,
	linkClass: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
	href: "#",
	text: 'Link',
	linkClass: ''
};

export default MenuItem;