import React from 'react';
import PropTypes from 'prop-types';

class ListItemTotal extends React.Component {
	render() {
		return (
			<li className={ this.props.className }>
				<span>{ this.props.title }</span>
				<strong>{ this.props.value }</strong>
			</li>
    	);
	}
}


ListItemTotal.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	value: PropTypes.string
};

ListItemTotal.defaultProps = {
	className: 'list-group-item d-flex justify-content-between',
	title: '',
	value: ''
};
export default ListItemTotal;
