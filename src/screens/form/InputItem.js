import React from 'react';
import PropTypes from 'prop-types';
import InvalidFeedback from './InvalidFeedback';

class InputItem extends React.Component {
	render() {
		return (
			<div className={ this.props.className }>
				{
					(this.props.type == 'text') || (this.props.type == 'email') ?
					<label className={ this.props.labelClassName } htmlFor={ this.props.id }>{ this.props.label }</label>
					:null
				}
				<input
					type={ this.props.type }
					className={ this.props.inputClassName }
					id={ this.props.id }
					placeholder={ this.props.placeholder }
					defaultValue={ this.props.defaultValue }
					required={ this.props.required ? "required" : false }
					defaultChecked={ this.props.checked ? "checked" : false }
					name={ this.props.name }
				/>
				{
					this.props.invalidText ?
					<InvalidFeedback text={ this.props.invalidText } className={ this.props.invalidClass } style={ this.props.invalidStyle } />
					: null
				}
				{
					(this.props.type != 'text') && (this.props.type != 'email') ?
					<label className={ this.props.labelClassName } htmlFor={ this.props.id }>{ this.props.label }</label>
					:null
				}
			</div>
    	);
	}
}

InputItem.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	inputClassName: PropTypes.string,
	labelClassName: PropTypes.string,
	label: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	defaultValue: PropTypes.string,
	checked: PropTypes.bool,
	required: PropTypes.bool,
	invalidText: PropTypes.string,
	invalidClass: PropTypes.string,
	invalidStyle: PropTypes.object
};

InputItem.defaultProps = {
	type: "text",
	className: "col-md-6 mb-3",
	inputClassName: "form-control",
	labelClassName: "",
	label: "",
	id: "",
	name: null,
	placeholder: "",
	defaultValue: "",
	required: true,
	checked: false,
	invalidText: "",
	invalidClass: "invalid-feedback",
	invalidStyle: null
};

export default InputItem;
