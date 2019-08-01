
import React,{Component}from 'react';


class CommentContainer extends Component {
	constructor(props){
super(props)

this.state={
	comment:'',
	comments:[]
}

	}
	handleChange = event =>{
		this.setState({
			comment: event.target.value

		})
	}

	handleSubmit = (event) =>{
		event.preventDefault()
		console.log(this.state)
		this.setState({
			
 comments: [...this.state.comments, this.state.comment],
 comment: ''

})


		

	}



	render(){
		console.log(this.state)





		return (

			<div>
			<p>Comment(s) for This Car</p>

			 <ul>
  {this.state.comments.map(c =>(
  	<li>{c}</li>))}
  </ul>

			<form onSubmit={this.handleSubmit}>
			<input type="text" value={this.state.comment} onChange={this.handleChange}></input>
			<input type='submit' value='Submit A Comment'/>
			</form>
  
 

			</div>





			)
	}
} 
export default CommentContainer;