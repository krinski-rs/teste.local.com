import React from 'react';
import PropTypes from 'prop-types';
import { fas } from '@fortawesome/free-solid-svg-icons'
import Menu from '../../Menu';

class Content extends React.Component {
	
	render() {
		return (
				<div className="container-fluid">
			      <div className="row">
			        <Menu menu={this.props.menu}/>
			        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
			          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			            <h1 className="h2">{ this.props.title }</h1>
			          </div>
			        </main>
			      </div>
			    </div>
    	);
	}
}

Content.propTypes = {
	title: PropTypes.string,
	menu: PropTypes.array
};

Content.defaultProps = {
	title: "Home",
	menu: [		{
		text: 'Pessoas',
		href: '#',
		icon: fas.faUsers,
		itens: [
			{
				text: 'Cadastro',
				href: 'cadastro',
				icon: fas.faUserTie,
				itens: []
			},
			{
				text: 'Listagem',
				href: 'listagem',
				icon: fas.faUserTag,
				itens: []
			}
		]
	}]
};

export default Content;