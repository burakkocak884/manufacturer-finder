import React, {Component} from 'react';
import { connect} from 'react-redux';
import {createVehicle} from '../action/Vehicles'
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
			<form onSubmit={this.handleSubmit} >
			Year: <input   type="number" onChange={this.handleChange} name='year' ></input><br />
			Make: <input   type="text" onChange={this.handleChange} name='make' placeholder="Make" required></input><br />
			Model: <input   type="text" onChange={this.handleChange} name='model' placeholder="Model" required></input><br />
			Color: <input   type="text" onChange={this.handleChange} name='color' placeholder="Color" required></input><br />
			Mileage: <input   type="number" onChange={this.handleChange} name='mileage' placeholder="Mileage" required></input><br />
			Sale Price: <input   type="number" onChange={this.handleChange} name='sale_price' placeholder="Sale Price" required></input><br />
			Click to <input type="submit" value ="Advertise Your Car"/>
			
			</form>
			</div>
			</td>
			</table>
			</div>



			)





}
}


export default connect(null, {createVehicle})(VehicleCreateForm);
