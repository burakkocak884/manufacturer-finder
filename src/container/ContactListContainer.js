import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteContact} from '../action/Vehicles';
class ContactListContainer extends Component {

 	render(){
		// console.log("contact list=",this.props.contactList)

 			if(this.props.contactList && this.props.contactList.length > 0){
				let sortedContact= this.props.contactList.sort(function(a,b){
				return a.Make_Name < b.Make_Name ? -1 : a.Make_Name >b.Make_Name ? 1 : 0;
			})
					return(
						<div>
						<h1>Contact List:</h1>
								<div class = 'row'>
								  {sortedContact.map(c =>(
									<div class = 'column'><div class = 'card'><h1>ID# {c.Make_ID}</h1>  <h3>{c.Make_Name}</h3><button onClick={()=> this.props.deleteContact(c.Make_ID)}>X</button></div></div>
										))}
							  
							  	</div>
						</div>
							)
			}else{
				return(<div><p>Contact List is Empty</p></div>)
	}
}
}
		

const mapStateToProps = state =>{
	return{contactList: state.contactList}
}
export default connect(mapStateToProps,{deleteContact})(ContactListContainer);