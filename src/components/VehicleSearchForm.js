import React, {Component} from 'react';
import { connect} from 'react-redux';

class VehicleSearchForm extends Component{
	constructor(props){
super(props)

this.state={
	searchTerm1:''
}
}

		
		handleChange = event =>{
this.setState({

	searchTerm1: event.target.value
})

		}

		handleSubmit = event =>{
			
			event.preventDefault()
			if (this.state.searchTerm1 !== ''){
			this.props.findVehicles(this.state.searchTerm1)
			this.setState({
				searchTerm1: ''
			})}

			

		}
	




		

	render(){
		
		console.log(this.props)

		
		return (
			<div>
            <br />
			<h1>Try Our Vehicle Finder Tool.</h1>
			<form onSubmit={this.handleSubmit} >
			<input   type="text" onChange={this.handleChange} value={this.state.searchTerm1}></input>
			<input type="submit" value ="Find List of Specific Car(s)" onClick={()=>this.props.findVehicles(this.state.searchTerm1)}/>
			
			</form>
			</div>



			)





}
}

const mapDispatchToProps = dispatch => ({
  
  findVehicles: make => dispatch({type: "FIND_VEHICLES",make})
})
export default connect(null,mapDispatchToProps)(VehicleSearchForm);



