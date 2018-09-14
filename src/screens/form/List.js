import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import ListItemTotal from './ListItemTotal';

class List extends React.Component {
	render() {
		return (
			<div className="col-md-4 order-md-2 mb-4">
				<h4 className="d-flex justify-content-between align-items-center mb-3">
					<span className="text-muted">Your cart</span>
					<span className="badge badge-secondary badge-pill">3</span>
				</h4>
				<ul className="list-group mb-3">
                {
                	this.props.itens.map(function(obj, idx){
                		return <ListItem { ...obj } key={idx} />
                	})
                }
                {
                	this.props.total ? <ListItemTotal { ...this.props.total }/> : null
                }
                </ul>
				<form className="card p-2">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Promo code" />
						<div className="input-group-append">
							<button type="submit" className="btn btn-secondary">Redeem</button>
						</div>
					</div>
				</form>
			</div>
    	);
	}
}

List.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	descricao: PropTypes.string,
	itens: PropTypes.array,
	total: PropTypes.object
};

List.defaultProps = {
	className: 'py-5 text-center',
	title: 'Form',
	descricao: '',
	itens: [
		{
			className: 'list-group-item d-flex justify-content-between lh-condensed',
			divClassName: null,
			title: 'Product name',
			description: 'Brief description',
			value: '$12'
		},
		{
			className: 'list-group-item d-flex justify-content-between lh-condensed',
			divClassName: null,
			title: 'Second product',
			description: 'Brief description',
			value: '$12'
		},
		{
			className: 'list-group-item d-flex justify-content-between lh-condensed',
			divClassName: null,
			title: 'Third item',
			description: 'Brief description',
			value: '$5'
		},
		{
			className: 'list-group-item d-flex justify-content-between bg-light',
			divClassName: 'text-success',
			spanClassName: 'text-success',
			smallClassName: 'text-success',
			title: 'Promo code',
			description: 'EXAMPLECODE',
			value: '-$5'
		}
	],
	total: null
};
export default List;
