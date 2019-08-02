import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import { connect } from 'react-redux';
class ContactListContainer extends Component {

 
 // handleSubmit = (e) =>{

 // 	e.preventDefault()
 // 	const currentId = parseInt(e.target.value)
 // 	console.log("the ID=",currentId)
 
 // 	return (this.props.wishedCars.filter(v => v.id !== currentId))


 
	render(){
		console.log("contact list=",this.props.contactList)

 if(this.props.contactList && this.props.contactList.length > 0){



 	let sortedContact= this.props.contactList.sort(function(a,b){
			
			return a.Make_Name < b.Make_Name ? -1 : a.Make_Name >b.Make_Name ? 1 : 0;
			})
		return(
				<div>
				<h1>Contact List:</h1>
					<ul>
							{sortedContact.map(c =>(
								<li>ID #{c.Make_ID} -->  {c.Make_Name}</li>
								))}



				
		            </ul>
				</div>
			)
	}else{
		return(<div><p>Contact List is Empty</p></div>)
	}
}
}
		

const mapStateToProps = state =>{
	return{
		contactList: state.contactList
	}
}




  
  

export default connect(mapStateToProps)(ContactListContainer);