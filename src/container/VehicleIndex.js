
import React, { Component} from 'react';
import {Link}  from 'react-router-dom';
import { connect } from 'react-redux';
import WishListContainer from './WishListContainer'




class VehicleIndex extends Component {
		constructor(props){
			super(props)

			this.state={
				idHolder: [],
				wishCarHolder:[]
					}
				}



			wishClick = (e) =>{
				this.props.addWishList(this.state.idHolder)
			}


			handleSubmit = (e) =>{
				
				e.preventDefault()
				const currentId = parseInt(e.target.value)
					this.setState({
					wishCarHolder: [],
					idHolder: [...this.state.idHolder, currentId]
					},() => console.log('idHolderInsight=',this.state.idHolder))
					console.log('idHolderOutside=',this.state.idHolder)
				}

 theWishList = () =>{
		   	return this.state.wishCarHolder;
		   }
		   


   
	render(){

		 console.log('render at VehicleIndex=', this.props)
		 console.log('wishlist array', this.state.wishCarHolder)
		const {vehicles, deleteVehicle, addWishList} = this.props
	
	if(this.state.idHolder.length >0){

	
  const theList = this.props.vehicles.map(vehicle=>{
  	return(this.state.idHolder.find(theId =>{
  		
  		if(vehicle.id === theId){
  			if(!this.state.wishCarHolder.includes(vehicle)){
  		 this.state.wishCarHolder.push(vehicle);
  		}

  		}
  		
  		}))})
  
 
  }
 

console.log('wish list=',this.state.wishCarHolder)

	return(
		<div>
			
				<WishListContainer wishedCars={this.state.wishCarHolder} deleteFromWishList={this.props.deleteFromWishList}/>
			
		<br />
		
		
			<div class="row"> 
		
				{vehicles.map(v => (

			  <div  class="column" key={v.id}>
			 	 
				   
				    <Link to={`/vehicles/${v.id}`}>
					    <div class="card"  >
						    <h4>{v.year}--{v.make}</h4>
						    
					    </div>
	               </Link>

				<button onClick={deleteVehicle}>X</button>
				<button key={v.id} value={v.id} onClick={this.handleSubmit}>Add to Wish List</button>
				
			 </div>


			  ))}

			
		
		
		</div>
		
		
		</div>

	)


}
}


const mapStateToProps = (state) =>{ 
	return{
		
		wishCarHolder: state.wishCarHolder

	}
	 }

const mapDispatchToProps = dispatch => ({

  
  deleteVehicle: id => dispatch({type: "DELETE_VEHICLE",id}),
  deleteFromWishList: id => dispatch({type: "DELETE_FROM_WISH",id})
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleIndex)


