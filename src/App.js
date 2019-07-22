import React, {Component}from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import './App.css';
import VehicleIndex from './container/VehicleIndex';
import VehicleShow from './components/VehicleShow';
import FoundVehicleContainer from './container/FoundVehicleContainer'
import VehicleSearchForm from './components/VehicleSearchForm';

import WishListContainer from './container/WishListContainer'

import { fetchVehicles } from './action/Vehicles'

import { connect } from 'react-redux';





    class App extends Component{
      

//           handleChange=(event)=>{
//   this.setState({
//   searchTerm: event.target.value

// })
// }


       componentDidMount(){
        this.props.fetchVehicles()
      //      fetch("http://localhost:3000/vehicles")
      //      .then(res => res.json())
      //      .then(vehicles => this.setState({vehicles}))
          }
           


           vehiclesToFind = (word) =>{
               const foundCars = this.state.vehicles.filter(vehicle => vehicle.make.toLowerCase().includes(word.toLowerCase()))
               if (foundCars.length > 0){
                  return this.setState ({foundVehicles: foundCars})
               }else {
                return "No Cars Found";
           }}

           

           

           


    render(){
      console.log("app.js vehicles=", this.props)
        return (

        <Router>
          <div >
           <Link to="/"><button>Home</button></Link>
            <Link to="/vehicles"><button>List of Available Cars</button></Link>
             <Link to="/vehicles/wished"><button>My Wish List</button></Link>

            
           
            <FoundVehicleContainer  /> 
            <VehicleSearchForm searchTerm={this.vehiclesToFind}/>
          
           
          

        
            <Switch>
             <Route path="/vehicles/:id" render={()=>(<VehicleShow />)}/>
             <Route path="/vehicles" render={() => (<VehicleIndex />)}/> 
             <Route exact path="/" render={()=>(<h1>Welcome</h1>)}/>
             <Route path="/vehicles/foundVehicles" render={() => (<FoundVehicleContainer  />)} />
             <Route path="/vehicles/wished" render={() => (<WishListContainer />) } />
           </Switch>

       
        </div>
        </Router>

    
  );
 
}
}



export default connect(null, {fetchVehicles})(App)