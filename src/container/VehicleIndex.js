
import React, { Component} from 'react';
import {deleteVehicle, vehicleDetail} from '../action/Vehicles'
import { connect } from 'react-redux';
import  {Link} from 'react-router-dom';




class VehicleIndex extends Component {
		
 
		

	render(){


		 //  console.log('render at VehicleIndex=', this.props)
		 // // console.log('wishlist array', this.state.wishCarHolder)
	 	 const { thevehicles} = this.props
	 	
	 let theList;
  
    if (thevehicles && thevehicles.length > 0){
   	theList = 	<div>{thevehicles.map((v,index) => (
	   				<div key={v.id} class='column-index'>
		   				<Link key={v.id} to={`/vehicles/${v.id}`} onClick={()=> this.props.vehicleDetail(v.id)}>
			   				<div class='row-index'>
				   				<div class ='card-index'>
										<p>{v.year} {v.make}</p>
										
								</div>
							</div>
		   				</Link>
		   				<button onClick={() => this.props.deleteVehicle(v.id)}>X</button>
	           
	   				</div>
   				))}

   				</div>

   	}else{
theList = <p>There is no vehicle(s) to display</p>
   }

		return(



		
			
			
			<div class="vehicle-create-form">
				<h1>All available Cars</h1>
				{theList}
			</div>
			
		
			
		
			)
	

}}


const mapStateToProps = (state) =>{ 
	return{
		thevehicles: state.vehicles
	}
	 }



export default connect(mapStateToProps, {vehicleDetail, deleteVehicle})(VehicleIndex)

