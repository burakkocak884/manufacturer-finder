
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
	
			<ul>
			
				{thevehicles.map(v => (
	<Link to={`/vehicles/${v.id}`} onClick={()=> this.props.vehicleDetail(v.id)}><li key={v.id}>{v.year}--{v.make}</li></Link>
					
					))}
			</ul>
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


