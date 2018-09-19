import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
	render() {
		return (
			<footer className="my-5 pt-5 text-muted text-center text-small">
				<p className="mb-1">&copy; 2017-2018 Company Name</p>
				<ul className="list-inline">
					<li className="list-inline-item"><a href={ this.props.href1 }>Privacy</a></li>
					<li className="list-inline-item"><a href={ this.props.href2 }>Terms</a></li>
					<li className="list-inline-item"><a href={ this.props.href3 }>Support</a></li>
				</ul>
			</footer>
    	);
	}
}


Footer.propTypes = {
	href1: PropTypes.string,
	href2: PropTypes.string,
	href3: PropTypes.string
};

Footer.defaultProps = {
	href1: '#',
	href2: '#',
	href3: '#'
};
export default Footer;