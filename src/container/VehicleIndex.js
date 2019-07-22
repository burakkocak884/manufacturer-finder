
import React, { Component} from 'react';

import { connect } from 'react-redux';
import  {Link} from 'react-router-dom';




class VehicleIndex extends Component {
		

   handleSubmit = e => {
 	e.preventDefault()
 
}
	render(){


		 //  console.log('render at VehicleIndex=', this.props)
		 // // console.log('wishlist array', this.state.wishCarHolder)
	 	 const { vehicles} = this.props
	
	return(
		<div>
	
			<ul>
			
				{vehicles.map(v => (
	<Link to={`/vehicles/${v.id}`} onClick={()=>this.props.vehicleDetail(v.id)} ><li key={v.id}>{v.year}--{v.make}</li></Link>
					
					))}
			</ul>
		</div>

	)
}}


const mapStateToProps = (state) =>{ 
	return{vehicles: state.vehicles}
	 }

const mapDispatchToProps = dispatch => ({

  vehicleDetail: id => dispatch({type: "VEHICLE_DETAIL",id})
  
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleIndex)


