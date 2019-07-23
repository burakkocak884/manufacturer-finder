
import React, { Component} from 'react';

import { connect } from 'react-redux';
import  {Link} from 'react-router-dom';




class VehicleIndex extends Component {
		


	render(){


		 //  console.log('render at VehicleIndex=', this.props)
		 // // console.log('wishlist array', this.state.wishCarHolder)
	 	 const { thevehicles} = this.props
	
	return(
		<div>
		<table class="v-index">
		<td>
		
		<div class= "column12">

		
	
			
			
				{thevehicles.map(v => (
	<Link to={`/vehicles/${v.id}`} onClick={()=> this.props.vehicleDetail(v.id)}><div class="row"><div class="card">{v.year}--{v.make}</div></div></Link>
					
					))}
			
		</div>

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


