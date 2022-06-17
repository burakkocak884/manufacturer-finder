import React,{Component}from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
import {getManufacturerDetails, findManufacturer, addToContactList} from '../action/Vehicles'
import  {Link} from 'react-router-dom';
class VehicleManufacturerContainer extends Component {
	
	constructor(props){
				super(props)

				this.state={
					searchTerm:''
		}}

//const findManufacturer = () => ({type: "FIND_MANUFACTURER",manu});
//const addToContactList = () => ({type: "ADD_TO_CONTACT_LIST", cManu});
//const getManufacturerDetails = () => ({type: "GET_MANUFACTURER_DETAIL", manufacturerId});

				handleChange = event =>{
					if(event.target.value !== '')
						this.setState({searchTerm: event.target.value})
				}
		


				handleSubmit = (event) =>{
					event.preventDefault()
					if(this.state.searchTerm !== ''){
						this.props.findManufacturer(this.state.searchTerm)
						this.setState({searchTerm:''})
					}
						
				}
				
				handleSelected = (event) =>{
					this.props.addToContactList(event);
					//this.props.getManufacturerDetails(event.Make_ID);

				}

		render(){
		
		

		
		
		return (

			<div>
				{/* <h2>Search in Directory</h2> */}
					<Form >
							<Form.Field>
								
								<input   type="text" onChange={this.handleChange} value={this.state.searchTerm} placeholder="Type in a business name..."/>
							</Form.Field>

							
							
				             <Form.Field>
								<Button type="submit" onClick={this.handleSubmit}>Find A Specific Manufacturer</Button>
							 </Form.Field>
			  		 </Form>


				    {/* <p>----------------------------------------------------------------------------------</p> */}
					  
					  {/* <div className="selected-manus"> 
					  <h2>Click on a manufacturer to add to your contact list</h2> 
					  {this.props.manufacturers ? <ul>{this.props.manufacturers.map((m, index)=>(<Link key={index} to={`/vehicle_manufacturers/${m.Make_ID}`} onClick={()=>this.handleSelected(m)}><li key={index}>{m.Make_Name}</li></Link>
					   	))}</ul> : <p>Search is empty</p>
					   }</div> */}
				    {/* <p>----------------------------------------------------------------------------------</p> */}
			  

						<ul>
							{this.props.vehicleMakers ? this.props.vehicleMakers.map((v, index) =>(<li key={index} >{v.Make_Name}</li>)):<h4></h4>}
					   </ul>
			</div>
				)}
		
	
} 
const mapStateToProps = state =>{
	console.log("details found : ",state.foundManufacturer)
	return{
		
		vehicleMakers: state.vehicleManufacturers,
		manufacturers: state.manufacturers,
		manufacturer: state.foundManufacturer

	}
}

export default connect(mapStateToProps, {getManufacturerDetails, addToContactList, findManufacturer})(VehicleManufacturerContainer);







