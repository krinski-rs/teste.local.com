import React from 'react';
import PropTypes from 'prop-types';
import InvalidFeedback from './InvalidFeedback';

const Option = (attr) =>
	(
		<option value={ attr.value } defaultValue={ attr.selected ? "selected" : false } key={attr. idx}>{ attr.text }</option>
	);
class SelectItem extends React.Component {
	render() {
		return (
			<div className={ this.props.className }>
				<label className={ this.props.labelClassName } htmlFor={ this.props.id }>{ this.props.label }</label>
	            <select className={ this.props.selectClassName } id={ this.props.id } required={ this.props.required ? "required" : false }>
                {
                	this.props.options.map(function(obj, idx){
                		return <Option {...obj} key={idx} />
                	})
                }
	            </select>
				{
					this.props.invalidText ?
					<InvalidFeedback text={ this.props.invalidText } className={ this.props.invalidClass } style={ this.props.invalidStyle } />
					: null
				}
			</div>
    	);
	}
}

SelectItem.propTypes = {
	className: PropTypes.string,
	labelClassName: PropTypes.string,
	label: PropTypes.string,
	selectClassName: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	required: PropTypes.bool,
	invalidText: PropTypes.string,
	invalidClass: PropTypes.string,
	invalidStyle: PropTypes.object,
	options: PropTypes.array
};

SelectItem.defaultProps = {
	className: "col-md-5 mb-3",
	labelClassName: "",
	label: "",
	selectClassName: "custom-select d-block w-100",
	id: "",
	name: "",
	required: true,
	invalidText: "",
	invalidClass: "invalid-feedback",
	invalidStyle: null,
	options: []
};

export default SelectItem;
