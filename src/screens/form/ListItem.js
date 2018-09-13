import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
	render() {
		return (
			<li className={ this.props.className }>
				<div className={ this.props.divClassName }>
					<h6 className="my-0">{ this.props.title }</h6>
					<small className={ this.props.smallClassName }>{ this.props.description }</small>
				</div>
				<span className={ this.props.spanClassName }>{ this.props.value }</span>
			</li>
    	);
	}
}


ListItem.propTypes = {
	className: PropTypes.string,
	divClassName: PropTypes.string,
	spanClassName: PropTypes.string,
	smallClassName: PropTypes.string,
	title: PropTypes.string,
	descricao: PropTypes.string,
	value: PropTypes.string
};

ListItem.defaultProps = {
	className: 'list-group-item d-flex justify-content-between lh-condensed',
	divClassName: null,
	spanClassName: 'text-muted',
	smallClassName: 'text-muted',
	title: 'Product name',
	description: 'Brief description',
	value: '$12'
};
export default ListItem;
