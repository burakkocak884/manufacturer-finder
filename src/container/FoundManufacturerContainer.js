import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import { connect} from 'react-redux';
import VehicleSearchForm from '../components/ManifacturerSearchForm';
class FoundManufacturerContainer extends Component {


	render(){
		 
       const{foundCarMakers, foundManufacturers} = this.props
	   let foundIt = <p>Type a year and name of a manufacturer  in the form to list if any products offered.</p>
	   let sortedCarMakers;
	   let sortedManufacturers;
	   

  		 if (foundCarMakers && foundCarMakers.length > 0){
   			sortedCarMakers = foundCarMakers.sort(function(a,b){
			return a.Model_Name < b.Model_Name ? -1 : a.Model_Name >b.Model_Name ? 1 : 0;
			})
			foundIt =	<div>
							<div className = 'found-model-container'>
								<ul>
									{sortedCarMakers.map((v,index) => (<div key={v.id} ><li id={index}>{v.Make_Name} -- {v.Model_Name}</li></div>))}
								</ul>
							</div>				
						</div>
			
			}

		if (foundManufacturers && foundManufacturers.length > 0){
			sortedManufacturers = foundManufacturers.sort(function(a,b){
			return a.Mfr_Name < b.Mfr_Name ? -1 : a.Mfr_Name >b.Mfr_Name ? 1 : 0;
			})
			foundIt =	<div>
							<div className = 'found-model-container'>
								<ul>
									{sortedManufacturers.map((v,index) => (<div key={v.id} ><li id={index}>{v.Mfr_Name}</li></div>))}
								</ul>
							</div>				
						</div>
			}

			return(
			<div>
				<div className="main-table-header">
					<h1>Manufacturer's Product Finder <span className="data-source-text">(Data provided by NHTSA)</span></h1>
				</div>
				<VehicleSearchForm />
				{foundIt}
			</div>
				
			)}
}	



const mapStateToProps = state =>{
	return{
		foundCarMakers: state.foundCarMakers,
		searchCriteria: state.searchCriteria,
		foundManufacturers: state.foundManufacturers
	}
}
	const mapDispatchToProps = dispatch => ({

  vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId})
  
})

export default connect(mapStateToProps, mapDispatchToProps)(FoundManufacturerContainer);