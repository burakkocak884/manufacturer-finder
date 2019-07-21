
import React, {Component } from 'react';


class VehicleShow extends Component{

	


	render(){
		

		console.log('step 3 >> the vehicle props=',this.props)
		const theVehicle = this.props



return(

		

			<div class='individual-vehicle'>
			<table class='VehicleShow-table'>
			
			{Object.entries(theVehicle).map(([key,value])=> <tr><td><span class="keys">{key}</span></td><td><span class="values">{value}</span></td></tr>)}
			
			</table>

			

			</div>

			)
	}
}
export default VehicleShow;