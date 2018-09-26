import React from 'react';
import {
	  BrowserRouter as Router,
	  Route,
	  Link,
	  Switch,
	  Redirect
	} from "react-router-dom";
import PropTypes from 'prop-types';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuItem from './MenuItem';
import MenuItemList from './MenuItemList';

class Menu extends React.Component {
	
	render() {
		return (
			<nav className="col-md-2 d-none d-md-block bg-light sidebar">
				<div className="sidebar-sticky">
					<ul className="nav flex-column">
	                    {
	                    	this.props.menu.map(function(obj, idx){
                        		if(!!obj.itens && (obj.itens.length > 0)){
                        			return <MenuItemList href={ obj.href } text={obj.text} icon={obj.icon} key={idx} itens={obj.itens} />
                        		}else{
                        			return <MenuItem href={ obj.href } text={obj.text} icon={obj.icon} key={idx} />
                        		}
	                    	})
	                    }
			        </ul>
			    </div>
			</nav>
    	);
	}
}

Menu.propTypes = {
	menu: PropTypes.array
};

Menu.defaultProps = {
	menu: [
		{
			text: 'Pessoas',
			href: '#',
			icon: fas.faUsers,
			itens: [
				{
					text: 'Clientes',
					href: '/pessoas/clientes/',
					icon: fas.faUserTie,
					itens: []
				},
				{
					text: 'Fornecedores',
					href: '/pessoas/fornecedor',
					icon: fas.faUserTag,
					itens: []
				},
				{
					text: 'Pessoa Jurídica',
					href: '/pessoas/juridica',
					icon: fas.faUserGraduate,
					itens: []
				},
				{
					text: 'Pessoa Física',
					href: '/pessoas/fisica',
					icon: fas.faUserAlt,
					itens: []
				}
			]
		},
		{
			text: 'Luma',
			href: '#',
			icon: fas.faDolly,
			itens: [
				{
					text: 'Produtos',
					href: '/luma/produtos',
					icon: fas.faBoxOpen,
					itens: []
				},
				{
					text: 'Unidades',
					href: '/luma/unidades',
					icon: fas.faWarehouse,
					itens: []
				},
				{
					text: 'Abastecimento',
					href: '/luma/abastecimento',
					icon: fas.faShoppingCart,
					itens: []
				}
			]
		}
	]
};

export default Menu;