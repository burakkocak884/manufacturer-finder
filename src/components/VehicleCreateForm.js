import React, {Component} from 'react';
import { connect} from 'react-redux';
import {createVehicle} from '../action/Vehicles'
class VehicleCreateForm extends Component{
	constructor(props){
super(props)

this.state={
	year: 2000,
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
			<h1>Do you have a car to sell?</h1>
			<h2>Go ahead and fill/submit the form below</h2>
			<form onSubmit={this.handleSubmit} >
			Year: <input   type="text" onChange={this.handleChange} name='year' placeholder="1990-2019"></input><br />
			Make: <input   type="text" onChange={this.handleChange} name='make' placeholder="Make"></input><br />
			Model: <input   type="text" onChange={this.handleChange} name='model' placeholder="Model"></input><br />
			Color: <input   type="text" onChange={this.handleChange} name='color' placeholder="Color"></input><br />
			Mileage: <input   type="text" onChange={this.handleChange} name='mileage' placeholder="Mileage"></input><br />
			Sale Price: <input   type="text" onChange={this.handleChange} name='sale_price' placeholder="Sale Price"></input><br />
			Click to <input type="submit" value ="Advertise Your Car"/>
			
			</form>
			</td>
			</table>
			</div>



			)





}
}


export default connect(null, {createVehicle})(VehicleCreateForm);
