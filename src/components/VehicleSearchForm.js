import React, {Component} from 'react';
import { connect} from 'react-redux';

class VehicleSearchForm extends Component{
	constructor(props){
super(props)

this.state={
	year: 0,
	make: ''
}
}

		
		handleChange = event =>{
this.setState({

	[event.target.name]: event.target.value
})

		}

		handleSubmit = event =>{
			
			event.preventDefault()
			this.state.year = parseInt(this.state.year)
			debugger
			this.props.findVehicles(this.state)
			this.setState({
				year: 0,
				make:''
				
			})

			

		}
	




		

	render(){
		
		console.log(this.props)

		
		return (
			<div>
            <br />
			
			<form onSubmit={this.handleSubmit} >
			
			Year: <input   type="number" onChange={this.handleChange} name='year' placeholder="1900-2020"></input><br />
			Make: <input   type="text" onChange={this.handleChange} name='make' placeholder="Make"></input><br />
			<input type="submit" value ="Find List of Specific Car(s)" />
			
			</form>
			</div>



			)





}
}

const mapDispatchToProps = dispatch => ({
  
  findVehicles: searchVehicle => dispatch({type: "FIND_VEHICLES",searchVehicle})
})
export default connect(null,mapDispatchToProps)(VehicleSearchForm);



