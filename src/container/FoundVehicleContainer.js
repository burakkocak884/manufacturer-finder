import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import { connect} from 'react-redux';
class FoundVehicleContainer extends Component {


	render(){


		console.log("props",this.props)
       const{foundCars} = this.props

  if (this.props.foundCars && this.props.foundCars > 0){
console.log("if existed")
		return(

<table class="wish-list-table">
			<div class="row">
			<h2 id="car-header1">Search result found {foundCars[0].make}(s)</h2>
		
				{foundCars.map((v,index) => (

			  <div  class="column" key={v.id}>
			 	 
				   
				    <Link to={`/vehicles/${v.id}`}>
					    <div class="card1"  >
					    
						    <h4>{v.year}, {v.make}, {v.color}</h4>
						   
					    </div>
	               </Link>

				<button>Remove</button>
			 </div>

	))}
	</div>
	</table>
	)}else {
		return(	<h2>Looking for a list of specific make?</h2> )
		}

}}

const mapStateToProps = (state) =>{ 
	return{
		foundCars: state.foundVehicles
	 }
	}

export default connect(mapStateToProps, null)(FoundVehicleContainer);