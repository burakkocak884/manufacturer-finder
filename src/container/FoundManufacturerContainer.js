import React, {Component} from 'react';
//import {Link}  from 'react-router-dom';
import { connect} from 'react-redux';
import VehicleSearchForm from '../components/ManifacturerSearchForm';
class FoundManufacturerContainer extends Component {


	render(){
		 
       const{foundManufacturers, searchCriteria} = this.props
	   let foundIt;
	   let maker;
	   let firstSet;
	   let secondSet;
	   let thirdSet;
	   let groupSizeMod;

  		 if (foundManufacturers && foundManufacturers.length > 0){
   		let sortedM = this.props.foundManufacturers.sort(function(a,b){
			return a.Model_Name < b.Model_Name ? -1 : a.Model_Name >b.Model_Name ? 1 : 0;
			})
		maker = foundManufacturers[0].Make_Name;
		groupSizeMod = sortedM.length % 14;
		let numberOfGroups = (sortedM.length - groupSizeMod) / 14;
			
		
			foundIt = <div>	 
			<h2 class='cars-found'>We found <span className='result-length'>{foundManufacturers.length}</span> products Manufactured and Sold by <span className='result-length'>{maker}</span> in the U.S.</h2>
			<div>
			<div className = 'found-model-container'>
								<div className = 'row'><div className = 'column'>
									<div className = 'card'>
												<ul>
													{sortedM.slice(0,14).map((v,index) => (
															<div key={v.id} >
																<li id={index}>{v.Model_Name}</li>
															</div>
																	))}
												</ul>
									</div>
									<br></br>
									
									<div className = 'card'>
												<ul>
													{sortedM.slice(14,28).map((v,index) => (
															<div key={v.id} >
																<li id={index}>{v.Model_Name}</li>
															</div>
																	))}
												</ul>
									</div>
									<br></br>
									<div className = 'card'>
												<ul>
													{sortedM.slice(28,42).map((v,index) => (
															<div key={v.id} >
																<li id={index}>{v.Model_Name}</li>
															</div>
																	))}
												</ul>
									</div>
									<br></br>
									<div className = 'card'>
												<ul>
													{sortedM.slice(42,54).map((v,index) => (
															<div key={v.id} >
																<li id={index}>{v.Model_Name}</li>
															</div>
																	))}
												</ul>
									</div>
									<br></br>
									<div className = 'card'>
												<ul>
													{sortedM.slice(54,68).map((v,index) => (
															<div key={v.id} >
																<li id={index}>{v.Model_Name}</li>
															</div>
																	))}
												</ul>
									</div>
									<br></br>
									<div className = 'card'>
												<ul>
													{sortedM.slice(68,82).map((v,index) => (
															<div key={v.id} >
																<li id={index}>{v.Model_Name}</li>
															</div>
																	))}
												</ul>
									</div>
									<br></br>
									<div className = 'card'>
												<ul>
													{sortedM.slice(82,96).map((v,index) => (
															<div key={v.id} >
																<li id={index}>{v.Model_Name}</li>
															</div>
																	))}
												</ul>
									</div>
									<br></br>
									<div className = 'card'>
												<ul>
													{sortedM.slice(96,110).map((v,index) => (
															<div key={v.id} >
																<li id={index}>{v.Model_Name}</li>
															</div>
																	))}
												</ul>
									</div>

								</div></div>
								</div></div>
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