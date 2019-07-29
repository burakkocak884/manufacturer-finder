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
   	foundIt = 	<div>
     <h2 class="cars-found'"><span id="car-header1">#{wishedCars.length} car(s) in your wish list.</span></h2>
   	 <h3>Sorted by the Newest...</h3>
   	{wishedCars.map((v,index) => (
   			<div key={v.id} class='column'>
   			<div class='row'>
   			
   			<Link id={v.id}to={`/vehicles/${v.id}`} onClick={()=> this.props.vehicleDetail(v.id)}><div class ='card'>

   	<p>#{index + 1}</p>
	{v.year}--{v.make}
					</div>
					</Link><button onClick={() => this.props.deleteFromWish(v.id)}>x</button>
					</div>
					</div>
					))}</div>

   }else{
foundIt = <p>Your wish list is empty, but it doesn't have to be.</p>
   }

		return(



			<div>
			<table class="finders">
			<td>
			<div class="vehicle-create-form">
			<h1 class="vehicle-finder-header">Wish List</h1>
		
			{foundIt}
			</div>
			</td>
			</table>

			
			</div>
			)}}

const mapStateToProps = state =>{
	return{wishedCars: state.wishCarHolder}
}



const mapDispatchToProps = dispatch => ({
  
  // deleteFromWishList: id => dispatch({type: "DELETE_FROM_WISH",id}),
  vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId}),
  deleteFromWish: vehicleId => dispatch({type: 'DELETE_FROM_WISH',vehicleId})
})

export default connect(mapStateToProps, mapDispatchToProps)(WishListContainer);