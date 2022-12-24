import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import { connect} from 'react-redux';
import VehicleSearchForm from '../components/ManifacturerSearchForm';
import ManufacturerDetailCard from '../components/ManufacturerDetailCard';
import { Dropdown, List, Icon } from 'semantic-ui-react'

class FoundManufacturerContainer extends Component {

	constructor(props){
		super(props)

		this.state={
			itemInDetail: {},
			currentlySelectedItemIndex: null,
			previouslySelectedItemIndex: null,
			initialOrFirstList: true,
			value: {}
			}}

		handleSelected(event, index, isFirstList){
			this.setState({
				itemInDetail: event,
				currentlySelectedItemIndex: index,
				previouslySelectedItemIndex: isFirstList ? index : this.setState.previouslySelectedItemIndex + index+1,
				initialOrFirstList: isFirstList
			})
		}

		handleSort = (event,{value}) =>{
			this.setState({value: value})
		}

	render()
	{
		 
	   const{foundCarMakers, foundManufacturers, progressMessage} = this.props
	   const value = this.state.value;

	   let sortedCarMakers;
	   let sortedManufacturers;
	   let longResultMessage;
	   let countryDropDown;

	   let listOfFilters = [{key: 1,text: "Sort By : Country A thru Z", value: "Country Up"},
							{key: 2,text: "Sort By : Country Z thru A", value: "Country Down"},
							{key: 3,text: "Sort By : City A thru Z", value: "City Up"},
							{key: 4,text: "Sort By : City Z thru A", value: "City Down"},
							{key: 5,text: "Sort By : State A thru Z", value: "State Up"},
							{key: 6,text: "Sort By : State Z thru A", value: "State Down"},
							{key: 7,text: "Sort By : Manufacturer Name A thru Z", value: "Name Up"},
							{key: 8,text: "Sort By : Manufacturer Name Z thru A", value: "Name Down"}]

	   let foundIt =  (progressMessage) ? <div><div><h1 id='loading-message'><span id='loading-text'>Loading Data from NTHSA...</span></h1></div><div className = ''>
											<i id="gear1" className="fa fa-5x fa-gear spin"></i>
											<i id="gear2" className="fa fa-5x fa-gear spin-back"></i>
											<i id="gear3" className="fa fa-5x fa-gear spin"></i>
											</div> </div>: <div></div>

		//Default Sorting
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

		//Filter DropDown setup
		if (foundManufacturers && foundManufacturers.length > 0)
		{
			
			if(listOfFilters.length > 1){

					countryDropDown = 	<div className = 'dropdown-container'>
											<Dropdown
												placeholder='Sort By'
												fluid
												selection
												options={listOfFilters}
												onChange = {this.handleSort}
												value = {value.value}
											/>
										</div>
			}
			//console.log("Found list of manufacturers : ",foundManufacturers)
			//A Warning message for query that generates more than 50 results
			if(foundManufacturers.length > 50)
			{
				longResultMessage = <h3 className = 'result-warning'><span className = 'result-warning-message'>{foundManufacturers.length}</span> records have been found. Try to be more specific.</h3>
			}

			//Sort Criterias
			switch(this.state.value){
				case "Country Up":
					sortedManufacturers = foundManufacturers.sort(function(a,b){return a.Country < b.Country ? -1 : a.Country > b.Country ? 1 : 0;})
					break;

				case "Country Down":
					sortedManufacturers = foundManufacturers.sort(function(a,b){return a.Country > b.Country ? -1 : a.Country < b.Country ? 1 : 0;})
					break;

				case "City Up":
					sortedManufacturers = foundManufacturers.sort(function(a,b){return a.City < b.City ? -1 : a.City > b.City ? 1 : 0;})
					break;

				case "City Down":
					sortedManufacturers = foundManufacturers.sort(function(a,b){return a.City > b.City ? -1 : a.City < b.City ? 1 : 0;})
					break;

				case "State Up":
					sortedManufacturers = foundManufacturers.sort(function(a,b){return a.StateProvince < b.StateProvince ? -1 : a.StateProvince > b.StateProvince ? 1 : 0;})
					break;

				case "State Down":
					sortedManufacturers = foundManufacturers.sort(function(a,b){return a.StateProvince > b.StateProvince ? -1 : a.StateProvince < b.StateProvince ? 1 : 0;})
					break;

				case "Name Up":
						sortedManufacturers = foundManufacturers.sort(function(a,b){return a.Mfr_Name < b.Mfr_Name ? -1 : a.Mfr_Name > b.Mfr_Name ? 1 : 0;})
					break;

				case "Name Down":
						sortedManufacturers = foundManufacturers.sort(function(a,b){return a.Mfr_Name > b.Mfr_Name ? -1 : a.Mfr_Name < b.Mfr_Name ? 1 : 0;})
					break;

				default :
					sortedManufacturers = foundManufacturers.sort(function(a,b){return a.Mfr_Name < b.Mfr_Name ? -1 : a.Mfr_Name >b.Mfr_Name ? 1 : 0;})
			}//end switch

			console.log("Found manufacturers : ",sortedManufacturers)

			foundIt =	<div className = 'main-found-manufacturer-container'>
							<div className = 'found-manufacturer-container'>
								<div>
								<List celled>
								{sortedManufacturers.map((v,index) => (
									
										<List.Item>
											{v.ManufacturerTypes[0] != null && v.ManufacturerTypes[0].Name.toLowerCase().includes('vehicle')? <Icon name = 'car' size='large'/>: 
											(v.EquipmentItems[0] != null && v.EquipmentItems[0].Name.toLowerCase().includes('tires')? <Icon name = 'life ring outline' size='large'/>:
											v.EquipmentItems[0] != null && v.EquipmentItems[0].Name.toLowerCase().includes('equipment')?<Icon name = 'wrench' size='large'/> : <Icon name = 'truck' size='large'/>)}
										<List.Content>
										
											<List.Header><Link key = {index} onClick = {() => this.handleSelected(v, index, true)}>{v.Mfr_Name}</Link></List.Header>
											{v.City}, {v.StateProvince} - {v.Country}
										</List.Content>
										</List.Item>
									
								
								))}
								</List>
									{/* <ul>
										{sortedManufacturers.map((v,index) => (<div key={index} ><li key = {index} id={index}><Link key = {index} onClick = {() => this.handleSelected(v, index, true)}>{v.Mfr_Name} in {v.City}, {v.StateProvince} - {v.Country} </Link></li></div>))}
									</ul> */}
								</div>

								<div>
									<ManufacturerDetailCard displayDetail = {this.state.itemInDetail} selectedItemIndex = {this.state.currentlySelectedItemIndex}/>
								</div>
							</div>				
						</div>
		}

		return(
		<div className = "manufacturer-container">
			<VehicleSearchForm />
			{longResultMessage}
			{countryDropDown}
			{foundIt}
		</div>)
	}//end mapStateToProps
}//end class FoundManufacturerContainer

const mapStateToProps = state =>{
	return{
		foundCarMakers: state.foundCarMakers,
		searchCriteria: state.searchCriteria,
		foundManufacturers: state.foundManufacturers,
		progressMessage: state.promiseDisplay,
		screenSize: state.screenSize
	}
}//end mapStateToProps

const mapDispatchToProps = dispatch => ({vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId})})

export default connect(mapStateToProps, mapDispatchToProps)(FoundManufacturerContainer);