import React,{Component}from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
import {getManufacturerDetails, findManufacturer, addToContactList} from '../action/Vehicles'
//import  {Link} from 'react-router-dom';
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
						{this.props.vehicleMakers && this.props.vehicleMakers.length > 0 ? <h2>Total of <span className = 'info-message'>{this.props.vehicleMakers.length}</span> records have been found...</h2> : <p></p>}
						<ul>
							{this.props.vehicleMakers ? this.props.vehicleMakers.map((v, index) =>(<li key={index} >{v.Make_Name}</li>)):<h4></h4>}
					   </ul>
			</div>
				)}
		
	
} 
const mapStateToProps = state =>{
	return{
		vehicleMakers: state.vehicleManufacturers,
		manufacturers: state.manufacturers,
		manufacturer: state.foundManufacturer
	}
}

export default connect(mapStateToProps, {getManufacturerDetails, addToContactList, findManufacturer})(VehicleManufacturerContainer);







