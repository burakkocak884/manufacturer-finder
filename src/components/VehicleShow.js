
import React, {Component } from 'react';
import {connect} from 'react-redux';

class VehicleShow extends Component{

	


	render(){
		

		console.log('step 3 >> the vehicle props=',this.props)
		const theCar = this.props.theCar
		


if(this.props.theCar !== 0){
return(

		

			<div class='individual-vehicle'>
			<table class='VehicleShow-table'>
			
			{Object.entries(theCar).map(([key,value])=> <tr><td><span class="keys">{key}</span></td><td><span class="values">{value}</span></td></tr>)}
			
			</table>

			
			<h4 class='wish-list-button'>Would you like to <button onClick={()=>this.props.addToWishList(theCar.id)}>Add to Wish List</button>?</h4>
			</div>

			)}
	}
}
const mapStateToProps = state =>{
return {
	theCar: state.theDetailCar
}

}
const mapDispatchToProps = dispatch => ({

  addToWishList: vehicleId => dispatch({type: "ADD_TO_WISH",vehicleId})
  
})



export default connect(mapStateToProps, mapDispatchToProps)(VehicleShow);