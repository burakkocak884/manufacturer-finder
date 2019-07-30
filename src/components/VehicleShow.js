
import React, {Component } from 'react';
import {connect} from 'react-redux';
import {Table} from 'semantic-ui-react';

class VehicleShow extends Component{

	


	render(){
		

		// console.log('step 3 >> the vehicle props=',this.props)
		const theCar = this.props.theCar
	


if(theCar){
	
return(

		

			<div >
			
			
			<h1>{theCar.year} {theCar.make} {theCar.model} {theCar.color}</h1>
			<h2 class="price_tag">Sale Price: ${theCar.sale_price}</h2>
			<h4 class='wish-list-button'>Would you like to <button onClick={()=>this.props.addToWishList(theCar.id)}>Add to Wish List</button>?</h4>

			<Table >

				<Table.Header>
					<Table.Row>
				{Object.entries(theCar).map(([key,value])=><Table.HeaderCell><span class="keys">{key}</span></Table.HeaderCell>)}
					</Table.Row>
				</Table.Header>



				<Table.Body>
					<Table.Row>
					{Object.entries(theCar).map(([key,value])=><Table.Cell><span class="values">{value}</span></Table.Cell>)}
					</Table.Row>	
				</Table.Body>

			</Table>

			
			
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