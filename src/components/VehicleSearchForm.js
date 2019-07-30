import React, {Component} from 'react';
import { connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
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
		
			this.props.findVehicles(this.state)
			this.setState({
				year: 0,
				make:''
				
			})

			

		}
	




		

	render(){
		
		// console.log(this.props)

		
		return (
			
            
            <Form >
			
			
			
				<Form.Field>
					<label>Year</label>
					<input   type="number" onChange={this.handleChange} name='year' placeholder="1900-2020"/>
				</Form.Field>

				<Form.Field>
					<label>Make</label>
					<input   type="text" onChange={this.handleChange} name='make' placeholder="Make"/>
				</Form.Field>

	             <Form.Field>
					<Button type="submit" onClick={this.handleSubmit}>Find List of Specific   <i class="fas fa-car"></i>(s)</Button>
				 </Form.Field>
			</Form>
			



			)





}
}

const mapDispatchToProps = dispatch => ({
  
  findVehicles: searchVehicle => dispatch({type: "FIND_VEHICLES",searchVehicle})
})
export default connect(null,mapDispatchToProps)(VehicleSearchForm);



