import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuItem from './MenuItem';

class MenuItemList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleClass: "collapsed",
			toggle: false,
			show: ""
		};
	    this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		event.preventDefault();
		this.setState(prevState => ({
			toggleClass: ((prevState.toggleClass == "collapsed") ? "" : "collapsed"),
			toggle: !prevState.toggle,
			show: ((prevState.show == "show") ? "" : "show")
		}));
	}
	
	render() {
		return (
			<li className="nav-item">
				<Link className={"nav-link pl-3 dropdown-toggle text-nowrap " + this.state.toggleClass} to={ this.props.href } data-toggle="collapse" aria-expanded={this.state.toggle}  onClick={ this.handleClick }>
            		<FontAwesomeIcon icon={ this.props.icon } />&nbsp;{ this.props.text }
            	</Link>
            	<div className={"collapse " + this.state.show}>
            		<ul className="flex-column nav">
	            		{
	                    	this.props.itens.map(function(obj, idx){
	                    		return <MenuItem href={ obj.href } text={obj.text} icon={obj.icon} key={idx} linkClass={"px-5 text-truncate"} />
	                    	})
	                    }
            		</ul>
            	</div>
            </li>
    	);
	}
}

MenuItemList.propTypes = {
	href: PropTypes.string.isRequired,
	icon: PropTypes.object,
	text: PropTypes.string.isRequired,
	itens: PropTypes.array
};

MenuItemList.defaultProps = {
	href: "#",
	text: 'Link',
	itens: []
};

export default MenuItemList;