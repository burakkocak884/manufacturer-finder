// import React, {Component} from 'react';
// import { connect} from 'react-redux';

// class VehicleCreateForm extends Component{
// 	constructor(props){
// super(props)

// this.state={
// 	year: 2000,
// 	make:'',
// 	model:'',
// 	color: '',
// 	transmission:'',
// 	drive_type:'',
// 	fuel_type:'',
// 	car_type:'',
// 	style: '',
// 	car_options:'',
// 	standard_specs:'',
// 	license_plate:'',
// 	doors: 2,
// 	engine: 4,
// 	mileage: 0,
// 	sale_price: 0
// }
// }

		
// 		handleChange = event =>{
// this.setState({

// 	searchTerm1: event.target.value
// 	year:  ,
// 	make: ,
// 	model: ,
// 	color:  ,
// 	transmission: ,
// 	drive_type: ,
// 	fuel_type: ,
// 	car_type: ,
// 	style:  ,
// 	car_options: ,
// 	standard_specs: ,
// 	license_plate: ,
// 	doors:  ,
// 	engine:  ,
// 	mileage:  ,
// 	sale_price: 
// })

// 		}

// 		handleSubmit = event =>{
			
// 			event.preventDefault()
// 			if (this.state.searchTerm1 !== ''){
// 			this.props.findVehicles(this.state.searchTerm1)
// 			this.setState({
// 				searchTerm1: ''
// 			})}

			

// 		}
	




		

// 	render(){
		
// 		console.log(this.props)

		
// 		return (
// 			<div>
//             <br />
// 			<h1>Try Our Vehicle Finder Tool.</h1>
// 			<form onSubmit={this.handleSubmit} >
// 			<input   type="text" onChange={this.handleChange} value={this.state.year} placeholder="year"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.make} placeholder="make"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.model} placeholder="model"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.color} placeholder="color"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.transmission} placeholder="transmission"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.fuel_type} placeholder="fuel type"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.car_type} placeholder="car type"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.style} placeholder="style"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.car_options} placeholder="car options"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.standard_specs} placeholder="standard specs"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.license_plate} placeholder="year"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.doors} placeholder="doors"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.engine} placeholder="engine"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.mileage} placeholder="mileage"></input>
// 			<input   type="text" onChange={this.handleChange} value={this.state.sale_price} placeholder="sale price"></input>
// 			<input type="submit" value ="Find List of Specific Car(s)" onClick={()=>this.props.addVehicles(this.state.searchTerm1)}/>
			
// 			</form>
// 			</div>



// 			)





// }
// }

// const mapDispatchToProps = dispatch => ({
  
//   findVehicles: make => dispatch({type: "FIND_VEHICLES",make}),
//   addVehicles : 
// })
// export default connect(null,mapDispatchToProps)(VehicleSearchForm);
