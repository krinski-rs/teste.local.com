import React from 'react';
import Header from './Header';
import List from './List';
import InputItem from './InputItem';
import SelectItem from './SelectItem';
import InputItemGroup from './InputItemGroup';
import '../../css/form-validation.css';

class Form extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<div className="row">
					<List />
					<div className="col-md-8 order-md-1">
						<form className="needs-validation" noValidate>
							<h4 className="mb-3">Billing address</h4>
							<div className="row">
								<InputItem label={ "First name" } id={"firstName"} invalidText={ "Valid first name is required." } />
								<InputItem label={ "Last name" } id={"lastName"} invalidText={ "Valid last name is required." } />
							</div>
							<InputItemGroup className={ "mb-3" } label={ "Username" } placeholder={ "Username" } invalidText={ "Your username is required" } invalidStyle={ {width: '100%'} } />
							<InputItem className={ "mb-3" } label={ "Email (Optional)" } type={ "email" } id={"email"} placeholder={ "you@example.com" } invalidText={ "Please enter a valid email address for shipping updates." } required= { false } />
							<InputItem className={ "mb-3" } label={ "Address" } id={"address"} placeholder={ "1234 Main St" } invalidText={ "Please enter your shipping address." } />
							<InputItem className={ "mb-3" } label={ "Address 2 (Optional)" } id={"address2"} placeholder={ "Apartment or suite" } invalidText={ "Please enter your shipping address." } required= { false } />
							<div className="row">
								<SelectItem className={ "col-md-5 mb-3" } id={ "country" } label={ "Country" } invalidText={ "Please select a valid country." }
					            	options={[
					            		{value: "", text: "Choose...", selected: true},
					            		{value: "US", text: "United States", selected: false}
					            	]} />
					            <SelectItem className={ "col-md-4 mb-3" } id={ "state" } label={ "State" } invalidText={ "Please provide a valid state." }
					            	options={[
					            		{value: "", text: "Choose...", selected: true},
					            		{value: "CLF", text: "California", selected: false}
					            	]} />
					            <InputItem className={ "col-md-3 mb-3" } label={ "Zip" } id={"zip"} invalidText={ "Zip code required." } required= { true } />
					        </div>
							<hr className="mb-4" />
							<InputItem className={ "custom-control custom-checkbox" } labelClassName={ "custom-control-label" } inputClassName={ "custom-control-input" } label={ "Shipping address is the same as my billing address." } type={ "checkbox" } id={"same-address"} required= { false } />
							<InputItem className={ "custom-control custom-checkbox" } labelClassName={ "custom-control-label" } inputClassName={ "custom-control-input" } label={ "Save this information for next time." } type={ "checkbox" } id={"save-info"} required= { false } />
							<hr className="mb-4" />
							<h4 className="mb-3">Payment</h4>
							<div className="d-block my-3">
								<InputItem className={ "custom-control custom-radio" } labelClassName={ "custom-control-label" } inputClassName={ "custom-control-input" } label={ "Credit card" } type={ "radio" } id={"credit"} name={ "paymentMethod" } checked={ true } />
								<InputItem className={ "custom-control custom-radio" } labelClassName={ "custom-control-label" } inputClassName={ "custom-control-input" } label={ "Debit card" } type={ "radio" } id={"debit"} name={ "paymentMethod" } />
								<InputItem className={ "custom-control custom-radio" } labelClassName={ "custom-control-label" } inputClassName={ "custom-control-input" } label={ "PayPal" } type={ "radio" } id={"paypal"} name={ "paymentMethod" } />
							</div>
							<div className="row">
								<InputItem className={ "col-md-6 mb-3" } label={ "Name on card" } id={"cc-name"} invalidText={ "Name on card is required." } required= { true } />
								<InputItem className={ "col-md-6 mb-3" } label={ "Credit card number" } id={"cc-number"} invalidText={ "Credit card number is required." } required= { true } />
							</div>
							<div className="row">
								<InputItem className={ "col-md-3 mb-3" } label={ "Expiration" } id={"cc-expiration"} invalidText={ "Expiration date required." } required= { true } />
								<InputItem className={ "col-md-3 mb-3" } label={ "CVV" } id={"cc-cvv"} invalidText={ "Security code required." } required= { true } />
							</div>
							<hr className="mb-4" />
							<button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
						</form>
					</div>
				</div>
			</div>
    	);
	}
}
export default Form;