import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer className="my-5 pt-5 text-muted text-center text-small">
				<p className="mb-1">&copy; 2017-2018 Company Name</p>
				<ul className="list-inline">
					<li className="list-inline-item"><a href="#">Privacy</a></li>
					<li className="list-inline-item"><a href="#">Terms</a></li>
					<li className="list-inline-item"><a href="#">Support</a></li>
				</ul>
			</footer>
    	);
	}
}
export default Footer;