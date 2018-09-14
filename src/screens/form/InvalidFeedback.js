import React from 'react';
import PropTypes from 'prop-types';

class InvalidFeedback extends React.Component {
	render() {
		return (
			<div className={ this.props.className } style={ this.props.style }>
			{ this.props.text }
			</div>
    	);
	}
}

InvalidFeedback.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	style: PropTypes.object
};

InvalidFeedback.defaultProps = {
	className: 'invalid-feedback',
	text: '',
	style: null
};

export default InvalidFeedback;