import React from 'react';
import PropTypes from 'prop-types';

class LineTitle extends React.Component {
	render() {
		return (
			<h4 className={ this.props.className }>{ this.props.text }</h4>
    	);
	}
}

LineTitle.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string
};

LineTitle.defaultProps = {
	className: 'mb-3',
	text: ''
};
export default LineTitle;