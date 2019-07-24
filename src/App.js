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
      

//   
// })
// }


       componentDidMount(){
        this.props.fetchVehicles()
        // this.props.individualVehicle(this.props.carID)
      //      fetch("http://localhost:3000/vehicles")
      //      .then(res => res.json())
      //      .then(vehicles => this.setState({vehicles}))
          }
           


          
           

           

           


    render(){
      console.log("app.js vehicles=", this.props)
        return (
<div class="main-display'">
        <Router>
          
           <Link to="/"><button>Home</button></Link>
            <Link to="/vehicles"><button>List of Available Cars</button></Link>
           
           
            <FoundVehicleContainer  /> 
            <WishListContainer />
            
            
            <Switch>
             <Route path="/vehicles/:id" render={()=>(<VehicleShow />)}/>
             <Route path="/vehicles" render={() => (<VehicleIndex />)}/> 
            
             <Route path="/vehicles/foundVehicles" render={() => (<FoundVehicleContainer  />)} />
             <Route path="/vehicles/wished" render={() => (<WishListContainer />) } />
           </Switch>

       
       
        </Router>
 </div>
    
  );
 
}
}



export default connect(null,{fetchVehicles})(App)