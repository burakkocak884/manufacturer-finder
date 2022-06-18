import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import { connect} from 'react-redux';
import VehicleSearchForm from '../components/ManifacturerSearchForm';
import ManufacturerDetailCard from '../components/ManufacturerDetailCard';
//import { Route } from 'workbox-routing';

class FoundManufacturerContainer extends Component {

	constructor(props){
		super(props)

		this.state={
			itemInDetail: {}
			}}

		handleSelected = event => {
			this.setState({itemInDetail: event})
		}

	render()
	{
		 
       const{foundCarMakers, foundManufacturers, progressMessage} = this.props

	   let foundIt =  (progressMessage) ? <div><div><h1 id='loading-message'><span id='loading-text'>Loading Data...</span></h1></div><div classname = ''>
		<i id="gear1" class="fa fa-5x fa-gear spin"></i>
	   <i id="gear2" class="fa fa-5x fa-gear spin-back"></i>
	   <i id="gear3" class="fa fa-5x fa-gear spin"></i>
	   </div> </div>: <div></div>


	   let sortedCarMakers;
	   let sortedManufacturers;
	   let longResultMessage;

		   if (foundCarMakers && foundCarMakers.length > 0)
		   {
				sortedCarMakers = foundCarMakers.sort(function(a,b){return a.Model_Name < b.Model_Name ? -1 : a.Model_Name >b.Model_Name ? 1 : 0;})
				foundIt =	<div>
								<div className = 'found-model-container'>
									<ul>
										{sortedCarMakers.map((v,index) => (<div key={v.id} ><li id={index}>{v.Make_Name} -- {v.Model_Name}</li></div>))}
									</ul>
								</div>				
							</div>
			}

		if (foundManufacturers && foundManufacturers.length > 0)
		{

			if(foundManufacturers.length > 50)
			{
				longResultMessage = <h3 className = 'result-warning'><span className = 'result-warning-message'>{foundManufacturers.length}</span> records have been found. Try to be more specific.</h3>
			}

			sortedManufacturers = foundManufacturers.sort(function(a,b){return a.Mfr_Name < b.Mfr_Name ? -1 : a.Mfr_Name >b.Mfr_Name ? 1 : 0;})
			
			foundIt =	<div>
							<div className = 'found-manufacturer-container'>
								<ul>
									{sortedManufacturers.map((v,index) => (<div key={v.id} ><li id={index}><Link onClick = {() => this.handleSelected(v)}>{v.Mfr_Name.length > 40 ? v.Mfr_Name.substring(0,50)+'...' : v.Mfr_Name}</Link></li></div>))}
								</ul>
								<ManufacturerDetailCard displayDetail = {this.state.itemInDetail}/>
							</div>				
						</div>
		}

		
		

		// if(foundManufacturers && foundManufacturers.length === 0)
		// {
		// 	longResultMessage = <h3 className = 'result-warning'><span className = 'result-warning-message'>Couldn't find any record.</span></h3>
		// }

		return(
		<div>
			<VehicleSearchForm />
			{longResultMessage}
			{foundIt}
		</div>)
	}
}	



const mapStateToProps = state =>{
	return{
		foundCarMakers: state.foundCarMakers,
		searchCriteria: state.searchCriteria,
		foundManufacturers: state.foundManufacturers,
		progressMessage: state.promiseDisplay
	}
}
	const mapDispatchToProps = dispatch => ({

  vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId})
  
})

export default connect(mapStateToProps, mapDispatchToProps)(FoundManufacturerContainer);