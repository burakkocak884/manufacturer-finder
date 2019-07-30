import React, {Component} from 'react';
import { connect} from 'react-redux';
import {createVehicle} from '../action/Vehicles'
import {Form, Button} from 'semantic-ui-react';
class VehicleCreateForm extends Component{
	constructor(props){
super(props)

this.state={
	year: 0,
	make:'',
	model:'',
	color: '',
	mileage: 0,
	sale_price: 0
}
}

		
		handleChange = event =>{

this.setState({
	[event.target.name]: event.target.value,
	})
}

		handleSubmit = event =>{
			
			event.preventDefault()


this.state.year = parseInt(this.state.year)
this.state.mileage = parseInt(this.state.mileage)
this.state.sale_price= parseInt(this.state.sale_price)




this.state.year = parseInt(this.state.year)
this.state.mileage = parseInt(this.state.mileage)
this.state.sale_price= parseInt(this.state.sale_price)

			
			this.props.createVehicle(this.state)
			this.setState({
				year: 0,
				make:'',
				model:'',
				color: '',
				mileage: 0,
				sale_price: 0
			})
		

	}
	




		

	render(){
		
		

		
		return (
			<div>
			<table>
			<td>
            <br />
            <div class="vehicle-create-form">
			<h1>Do you have a car to sell?</h1>
			<h2>Go ahead and fill/submit the form below</h2>


			<Form>
				<Form.Field>
					<label>Year</label>
					<input   type="number" onChange={this.handleChange} name='year' placeholder="1900-2020"/>
				</Form.Field>

				<Form.Field>
					<label>Make</label>
					<input   type="text" onChange={this.handleChange} name='make' placeholder="Make"/>
				</Form.Field>

				<Form.Field>
					<label>Model</label>
					<input   type="text" onChange={this.handleChange} name='model' placeholder="Model"/>
				</Form.Field>


				<Form.Field>
					<label>Color</label>
					<input   type="text" onChange={this.handleChange} name='color' placeholder="Color"/>
				</Form.Field>

				<Form.Field>
					<label>Mileage</label>
					<input   type="text" onChange={this.handleChange} name='mileage' placeholder="Mileage"/>
				</Form.Field>


				<Form.Field>
					<label>Sale Price($)</label>
					<input   type="text" onChange={this.handleChange} name='sale_price' placeholder="Sale Price"/>
				</Form.Field>





			
			
  				<Form.Field>
					<Button type="submit" onClick={this.handleSubmit}>Let's Create A <i class="fas fa-car"></i> ForSale</Button>
				 </Form.Field>

		</Form>
			</div>
			</td>
			</table>
			</div>



			)





}
}


export default connect(null, {createVehicle})(VehicleCreateForm);
