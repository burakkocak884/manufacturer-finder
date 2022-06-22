import React,{Component}from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
import {getManufacturerDetails, findManufacturer, addToContactList} from '../action/Vehicles'
class VehicleManufacturerContainer extends Component {
	
	constructor(props){
				super(props)

				this.state={
					searchTerm:''
		}}


				handleChange = event =>{
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
				}

				isValid(str) {
					return (!str || /^\s*$/.test(str));
				}

		render(){
		let sortedVehicleMakers;
		const {vehicleMakers, fetchMessage} = this.props;
		if(vehicleMakers)
   			sortedVehicleMakers = vehicleMakers.sort(function(a,b){return a.Make_Name < b.Make_Name ? -1 : a.Make_Name >b.Make_Name ? 1 : 0;})
		if(fetchMessage)
		{
			return(
				<div><div><h1 id='loading-message-all'><span id='loading-text-all'>Loading Data...</span></h1></div><div classname = ''>
				<i id="gear1-all" class="fa fa-5x fa-gear spin"></i>
				<i id="gear2-all" class="fa fa-5x fa-gear spin-back"></i>
				<i id="gear3-all" class="fa fa-5x fa-gear spin"></i>
				</div> </div>
			)
		}
		else
		{
			return (

				<div>

						<Form className = 'search-container'>
								<Form.Field className = 'search-input'>
									<input  type="text" onChange={this.handleChange} value={this.state.searchTerm} placeholder="Type in a business name..."/>
								</Form.Field>
	
								 <Form.Field>
									<Button type="submit" onClick={this.handleSubmit}>Search in Directory</Button>
								 </Form.Field>
						</Form>

						{sortedVehicleMakers && sortedVehicleMakers.length > 0 ? <h2>Total of <span className = 'info-message'>{sortedVehicleMakers.length}</span> records have been found...</h2> : <p></p>}
						<ul>
							{sortedVehicleMakers ? sortedVehicleMakers.map((v, index) =>(<li key={index} >{v.Make_Name}</li>)):<h4></h4>}
						</ul>
				</div>
					)}
			
		}
					
		
	
} 
const mapStateToProps = state =>{
	return{
		vehicleMakers: state.vehicleManufacturers,
		manufacturers: state.manufacturers,
		manufacturer: state.foundManufacturer,
		fetchMessage: state.messageToFectchManufacturers
	}
}

export default connect(mapStateToProps, {getManufacturerDetails, addToContactList, findManufacturer})(VehicleManufacturerContainer);







