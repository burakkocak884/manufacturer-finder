import React, {Component} from 'react';
//import {Link}  from 'react-router-dom';
import { connect} from 'react-redux';
import VehicleSearchForm from '../components/ManifacturerSearchForm';
class FoundManufacturerContainer extends Component {


	render(){
		 //console.log("props",this.props)
       const{foundManufacturers, searchCriteria} = this.props
	   let foundIt;
	   let maker;
	   let year;

  		 if (foundManufacturers && foundManufacturers.length > 0){
   		let sortedM = this.props.foundManufacturers.sort(function(a,b){
			
			return a.Model_Name < b.Model_Name ? -1 : a.Model_Name >b.Model_Name ? 1 : 0;
			})
		maker = foundManufacturers[0].Make_Name;
		year = searchCriteria.year;
		//year = foundManufacturers[0].year;

		foundIt = 	<div>
     					<h2 class="cars-found'">We found <span className='result-length'>{foundManufacturers.length}</span> products Manufactured or Sold by <span className='result-length'>{maker}</span> in <span className='result-length'>{year}</span> in the U.S.</h2>
						   	 <ol>
						   	{sortedM.map((v,index) => (
						   			<div key={v.id} >
						   			
							   			<li id={index}>{v.Model_Name}</li>
											
									</div>
											))}
						   	</ol>
   					</div>

   			}else{
			foundIt = <p>Type a year and name of a manufacturer  in the form to list if any products offered.</p>
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
		foundManufacturers: state.foundManufacturers,
		searchCriteria: state.searchCriteria
	}
}
	const mapDispatchToProps = dispatch => ({

  vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId})
  
})

export default connect(mapStateToProps, mapDispatchToProps)(FoundManufacturerContainer);