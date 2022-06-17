import React, {Component} from 'react';
import { connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
import {findVehicles} from '../action/Vehicles'
class VehicleSearchForm extends Component{
					constructor(props){
					super(props)

				this.state={
					year: 0,
					make: ''
					}
					}

		
				handleChange = event =>{
					if(event.target.value !== '')
						this.setState({[event.target.name]: event.target.value})
					}

				handleSubmit = event =>{
					event.preventDefault()
					if(this.state.make !== '')
						this.props.findVehicles(this.state);
					}
		

	render(){
			return (
				 <Form >
					<Form.Field>
						<label>Year</label>
						<input   type="number" onChange={this.handleChange} name='year' placeholder="1900-2020" />
					</Form.Field>

					<Form.Field>
						<label>Manufacturer Name</label>
						<input   type="text" onChange={this.handleChange} name='make' placeholder="Make" />
					</Form.Field>

					<Form.Field>
						<Button type="submit" onClick={this.handleSubmit}>Search </Button>
					</Form.Field>
				</Form>
					)}
}

export default connect(null,{findVehicles})(VehicleSearchForm);



