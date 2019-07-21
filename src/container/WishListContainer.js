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
   
   if (this.props.wishedCars.length > 0){
  
		return(
			<table class="wish-list-table">
			<div>

			


			<div class="row">
			
		
				{wishedCars.map(v => (

			  <div  class="column" key={v.id}>
			 	 
				   
				    <Link to={`/vehicles/${v.id}`}>
					    <div class="card2"  >
					    
						    <h2>{v.year}-{v.make}-{v.color}</h2>
						  
					    </div>
	               </Link>

				<button onClick={()=>this.props.deleteFromWishList(v.id)} >Remove</button>
			 </div>
			 ))}
				</div>
				
				</div>
				</table>

				)}else{

			return(<h4>Your wish list is empty</h4>)
		}


	

}}
const mapDispatchToProps = dispatch => ({
  
  deleteFromWishList: id => dispatch({type: "DELETE_FROM_WISH",id})
})

export default connect(null, mapDispatchToProps)(WishListContainer);