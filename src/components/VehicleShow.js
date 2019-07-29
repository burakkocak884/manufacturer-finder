
import React, {Component } from 'react';
import {connect} from 'react-redux';


class VehicleShow extends Component{

	


	render(){
		

		console.log('step 3 >> the vehicle props=',this.props)
		const theCar = this.props.theCar
	


if(theCar){
	
return(

		

			<div class='individual-vehicle'>
			
			
			<h1>{theCar.year} {theCar.make} {theCar.model} {theCar.color}</h1>
			<h2 class="price_tag">Sale Price: ${theCar.sale_price}</h2>
			<h4 class='wish-list-button'>Would you like to <button onClick={()=>this.props.addToWishList(theCar.id)}>Add to Wish List</button>?</h4>
			<table class='VehicleShow-table'>
			<td>
			{Object.entries(theCar).map(([key,value])=> <tr><td><span class="keys">{key}</span></td><td><span class="values">{value}</span></td></tr>)}
			</td>
			</table>

			
			
			</div>

			)


}else{
	return (
		<h2>Select a vehicle to see details...</h2>
		)
}
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