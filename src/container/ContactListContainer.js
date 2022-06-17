import React, {Component} from 'react';
//import {Link}  from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteContact} from '../action/Vehicles';
class ContactListContainer extends Component {

 	render(){
		
 			if(this.props.contactList && this.props.contactList.length > 0){
				let sortedContact= this.props.contactList.sort(function(a,b){
				return a.Make_Name < b.Make_Name ? -1 : a.Make_Name >b.Make_Name ? 1 : 0;
			})

			if(sortedContact != null && sortedContact.length > 0){
				return(
					<div>
							<h1>Click on a record for brief details</h1>
							<div className = 'row'>
							  {sortedContact.map(c =>(
								<div className = 'column'><div className = 'card'><h5>{c.Make_Name}...</h5><button onClick={()=> this.props.deleteContact(c.Make_ID)}>X</button></div></div>
									))}
						  
							  </div>
					</div>
						)
			}
				
			}else{
					return(<div><p></p></div>)
	}
}
}
		

const mapStateToProps = state =>{
	
	return{
		contactList: state.contactList,
		foundManufacturer: state.foundManufacturer
		
	}
}
export default connect(mapStateToProps,{deleteContact})(ContactListContainer);