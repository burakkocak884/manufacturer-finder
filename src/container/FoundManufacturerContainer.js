import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import { connect} from 'react-redux';
import VehicleSearchForm from '../components/ManifacturerSearchForm';
import ManufacturerDetailCard from '../components/ManufacturerDetailCard';

class FoundManufacturerContainer extends Component {

	constructor(props){
		super(props)

		this.state={
			itemInDetail: {},
			currentlySelectedItemIndex: null,
			previouslySelectedItemIndex: null,
			initialOrFirstList: true
			}}

		handleSelected(event, index, isFirstList){
		
			this.setState({
				itemInDetail: event,
				currentlySelectedItemIndex: index,
				previouslySelectedItemIndex: isFirstList ? index : this.setState.previouslySelectedItemIndex + index+1,
				initialOrFirstList: isFirstList

			})
		}

		// handleSelectedFromSecondPartOfTheList(event, index, isFirstList){
		// 	this.setState({
		// 		itemInDetail: event,
		// 		currentlySelectedItemIndex: index,
		// 		previouslySelectedItemIndex: index,
		// 		initialOrFirstList: isFirstList

		// 	})
		// }
		
		

	render()
	{
		 
	   const{foundCarMakers, foundManufacturers, progressMessage, screenSize} = this.props
	   let stringLength = 70;

	   let foundIt =  (progressMessage) ? <div><div><h1 id='loading-message'><span id='loading-text'>Loading Data...</span></h1></div><div classname = ''>
		<i id="gear1" class="fa fa-5x fa-gear spin"></i>
	   <i id="gear2" class="fa fa-5x fa-gear spin-back"></i>
	   <i id="gear3" class="fa fa-5x fa-gear spin"></i>
	   </div> </div>: <div></div>


	   let sortedCarMakers;
	   let sortedManufacturers;
	   let longResultMessage;
	   
		
	   if(screenSize)
	   {
		   stringLength =  screenSize < 1000 ? 30 : 70;
	   }

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
			
			
			foundIt =	<div className = 'main-found-manufacturer-container'>
							<div className = 'found-manufacturer-container'>
								<div>
									<ul>
										{sortedManufacturers.map((v,index) => (<div key={v.id} ><li id={index}><Link onClick = {() => this.handleSelected(v, index, true)}>{v.Mfr_Name} in {v.Country} </Link></li></div>))}
									</ul>
								</div>

								<div>
									<ManufacturerDetailCard displayDetail = {this.state.itemInDetail} selectedItemIndex = {this.state.currentlySelectedItemIndex}/>
								</div>

								{/* <div>
									<ul>
										{sortedManufacturers.slice(this.state.currentlySelectedItemIndex ? this.state.currentlySelectedItemIndex + 1 : sortedManufacturers.length - 1 , sortedManufacturers.length - 1 ).map((v,index) => (<div key={v.id} ><li id={index}><Link onClick = {() => this.handleSelected(v, index, false)}>{stringLength < v.Mfr_Name.length ? v.Mfr_Name.substring(0,stringLength)+'...' : v.Mfr_Name}</Link></li></div>))}
									</ul>
								</div> */}

								

							</div>				
						</div>
		}


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
		progressMessage: state.promiseDisplay,
		screenSize: state.screenSize
	}
}
	const mapDispatchToProps = dispatch => ({

  vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId})
  
})

export default connect(mapStateToProps, mapDispatchToProps)(FoundManufacturerContainer);