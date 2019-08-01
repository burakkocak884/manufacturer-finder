import React,{Component}from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
import {findManufacturer, manufacturerDetails} from '../action/Vehicles'
import  {Link} from 'react-router-dom';
class VehicleManufacturerContainer extends Component {
	constructor(props){
super(props)

this.state={
	searchTerm:''
}

	}
	handleChange = event =>{
		this.setState({
			searchTerm: event.target.value

		})
	}

	handleSubmit = (event) =>{
		event.preventDefault()
		console.log(this.state)
		
			this.props.findManufacturer(this.state.searchTerm)
			this.setState({
				searchTerm:''
 })
		}


		

// 	}



	render(){
		console.log("rawData=",this.props)
		console.log("manu=",this.props.manufacturers)
		

if(this.props.vehicleMakers){

	let sortedInfo = this.props.vehicleMakers.sort(function(a,b){
			
			return a.Make_Name < b.Make_Name ? -1 : a.Make_Name >b.Make_Name ? 1 : 0;
			})
		console.log('sortedData',sortedInfo)



		return (

			<div>
<h2>Looking for a specific Vehicle Manufacturer???</h2>
		<Form >
				<Form.Field>
					
					<input   type="text" onChange={this.handleChange} value={this.state.searchTerm} placeholder="Type in a business name..."/>
				</Form.Field>

				
				
	             <Form.Field>
					<Button type="submit" onClick={this.handleSubmit}>Find A Specific Manufacturer</Button>
				 </Form.Field>
			   </Form>


			  <p>----------------------------------------------------------------------------------</p>
			   {this.props.manufacturers ? <ul>{this.props.manufacturers.map(m=>(<li>{m.Make_Name}</li>
			   	))}</ul> : <p>Search is empty</p>
			   }
			    <p>----------------------------------------------------------------------------------</p>
			   
			


			<ul>
		{sortedInfo.map(v =>(
			<Link key={v.Make_Id} onClick={this.props.manufacturerDetails(v.Make_Id)}><li>{v.Make_Name}</li></Link>

			))}
		</ul>
 

			</div>





			)}
		else{
			return(<p>No info</p>)
		}
	}
} 
const mapStateToProps = state =>{
	return{
		vehicleMakers: state.vehicleManufacturers,
		manufacturers: state.manufacturers

	}
}
const mapDispatchToProps = dispatch => ({
  
  findManufacturer: manu => dispatch({type: "FIND_MANUFACTURER",manu}),
  manufacturerDetails: id => dispatch({type: "MANUFACTURER_DETAIL",manu})
})
export default connect(mapStateToProps, mapDispatchToProps)(VehicleManufacturerContainer);







