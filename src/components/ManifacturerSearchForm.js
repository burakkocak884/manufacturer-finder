import React, {Component} from 'react';
import { connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
import {findVehicles} from '../action/Vehicles'
class VehicleSearchForm extends Component{

	constructor(props)
	{
		super(props)
		this.state={year: 0,make: ''}
	}// end constructor


	handleChange = event =>{
			let isInvalid = this.isValidEntry(event.target.value)
			if(!isInvalid)
				this.setState({[event.target.name]: event.target.value})
	}// end handleChange

	handleSubmit = event =>{
		
			event.preventDefault()
			
			if(this.state.make !== '')
				this.props.findVehicles(this.state);
	}// end handleSubmit

	isValidEntry(str) {
				return (!str || /^\s*$/.test(str));
	}// end isValidEntry
		

	render()
	{
		let dataRange = "1900-" + (new Date().getFullYear()+1).toString();
			return (
					<Form className = 'search-container'>
						<Form.Field className = 'search-input'>
							<label>Year</label>
							<input   type="number" onChange={this.handleChange} name='year' placeholder= {dataRange}/>
						</Form.Field>

						<Form.Field className = 'search-input'>
							<label>Manufacturer Name</label>
							<input  className = 'search-input' type="text" onChange={this.handleChange} name='make' placeholder="Make" />
						</Form.Field>

						<Form.Field>
							<Button className = 'search-button' type="submit" onClick={this.handleSubmit}>Manufacturer Search </Button>
						</Form.Field>
					</Form>)
	}// end Render
}

export default connect(null,{findVehicles})(VehicleSearchForm);



