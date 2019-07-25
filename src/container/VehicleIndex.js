
import React, { Component} from 'react';

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
   				<div class='column-index'>
   				<div class='row-index'>
   				

	<Link key={v.id} to={`/vehicles/${v.id}`} onClick={()=> this.props.vehicleDetail(v.id)}>
	<div class ='card-index'>
	<p>{v.year} {v.make}</p>
	</div>
	</Link>
	
					
				
   			</div>
   			</div>

					))}

   	</div>

   }else{
theList = <p>There is no vehicle(s) to display</p>
   }

		return(



			<div>
			<table class="finders">
			<td>
			<h1>All available Cars</h1>
			{theList}
			</td>
			</table>
			
			</div>
			)
	

}}


const mapStateToProps = (state) =>{ 
	return{
		thevehicles: state.vehicles
	}
	 }

const mapDispatchToProps = dispatch => ({

  vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId})
  
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleIndex)


