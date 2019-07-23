import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import { connect } from 'react-redux';
class WishListContainer extends Component {

 
 // handleSubmit = (e) =>{

 // 	e.preventDefault()
 // 	const currentId = parseInt(e.target.value)
 // 	console.log("the ID=",currentId)
 
 // 	return (this.props.wishedCars.filter(v => v.id !== currentId))


 
	render(){


		console.log("cars wished",this.props)

       const{wishedCars} = this.props
       let foundIt;
  
    if (wishedCars && wishedCars.length > 0){
   	foundIt = 	<div>{wishedCars.map(v => (
   				<div class='column'>
   				<div class='row'>
   				

	<Link to={`/vehicles/${v.id}`} onClick={()=> this.props.vehicleDetail(v.id)}>
	<div class ='card'>
	{v.year}--{v.make}
	</div>
	</Link>
	<button onClick={()=> this.props.deleteFromWish(v.id)}>Remove from Wish List</button>
					
				
   			</div>
   			</div>

					))}

   	</div>

   }else{
foundIt = <p>There is no vehicle(s) to display</p>
   }

		return(



			<div>
			<table class="finders">
			<td>
			<h1>My wish List</h1>
			{foundIt}
			</td>
			</table>
			
			</div>
			)
	

}}

const mapStateToProps = state =>{
	return{wishedCars: state.wishCarHolder}
}



const mapDispatchToProps = dispatch => ({
  
  deleteFromWishList: id => dispatch({type: "DELETE_FROM_WISH",id}),
  vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId}),
  deleteFromWish: vehicleId => dispatch({type: 'DELETE_FROM_WISH',vehicleId})
})

export default connect(mapStateToProps, mapDispatchToProps)(WishListContainer);