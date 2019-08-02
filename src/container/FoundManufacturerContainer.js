import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import { connect} from 'react-redux';
import VehicleSearchForm from '../components/VehicleSearchForm';
class FoundManufacturerContainer extends Component {


	render(){
		 console.log("props",this.props)
       const{foundManufacturers} = this.props
       let foundIt;
    
   if (foundManufacturers && foundManufacturers.length > 0){
   	let sortedM = this.props.foundManufacturers.sort(function(a,b){
			
			return a.Model_Name < b.Model_Name ? -1 : a.Model_Name >b.Model_Name ? 1 : 0;
			})





   	foundIt = 	<div>
     <h2 class="cars-found'"><span id="car-header1">{foundManufacturers.length}</span> {foundManufacturers[0].Make_Name} Model(s) Found!!!</h2>
   	 <ol>
   	{sortedM.map((v,index) => (
   			<div key={v.id} >
   			
   			
   			

   	
	<li>{v.Model_Name}</li>
					
					
					
					</div>
					))}
   	</ol>
   	</div>

   }else{
foundIt = <p>Type a year and name of a manufacturer  in the form to list if any products offered.</p>
   }

		return(



			<div>
			<table >
			<td>
			<div >
			<h1>Manufacturer's Product Finder</h1>
			 <VehicleSearchForm />
			{foundIt}
			</div>
			</td>
			</table>

			
			</div>
			)}
}	



const mapStateToProps = state =>{
	return{
		foundManufacturers: state.foundManufacturers


	}
}
	const mapDispatchToProps = dispatch => ({

  vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId})
  
})

export default connect(mapStateToProps, mapDispatchToProps)(FoundManufacturerContainer);