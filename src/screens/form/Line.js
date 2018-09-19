import React from 'react';
import PropTypes from 'prop-types';

class Line extends React.Component {
	render() {
		return (
				<hr className={ this.props.className } />
    	);
	}
}

Line.propTypes = {
	className: PropTypes.string
};

Line.defaultProps = {
	className: 'mb-4'
};
export default Line;