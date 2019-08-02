import React, {Component}from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import './App.css';


import FoundManufacturerContainer from './container/FoundManufacturerContainer';
import ContactListContainer from './container/ContactListContainer';



import {vehicleManufacturers } from './action/Vehicles';
import VehicleManufacturerContainer from './container/VehicleManufacturerContainer';
import { connect } from 'react-redux';





    class App extends Component{


//    getDerivedStateFromProps(){
    
//         // this.props.fetchVehicles()
// console.log('a')
//             this.interval = setInterval(() =>{
//         this.props.fetchVehicles()
//       },250)
     
//    }



      
      // componentDidMount(){
      //   console.log('a')
      //   this.props.fetchVehicles()
      //   // this.props.vehicleManufacturers()
      // //    this.interval = setInterval(() =>{
      // //   this.props.fetchVehicles()
      // // },250)
      // console.log('b')
      // //
      
      // }


           


    render(){
      console.log('f')
      // console.log("app.js vehicles=", this.props)
        return (
<div class="main-display'">
        

        <Router>
          
           <Link to="/"><button>Home</button></Link>
            
            <Link to="/vehicle_manufacturers" onClick={() => this.props.vehicleManufacturers()}><button>Get List of All Manufacturers in U.S.A.</button></Link>
           <table>

            <table class ='main-screen'>
            <td>


            <FoundManufacturerContainer  /> 
            <ContactListContainer />
            <VehicleManufacturerContainer />
            
           
            
            
            


            </td>
            </table>
            
            <Switch>
             
             
             
             <Route path="/vehicles/foundVehicles" render={() => (<FoundManufacturerContainer  />)} />
             
             <Route path="/vehicle_manufacturers" render={() => (<VehicleManufacturerContainer />)}/> 
           </Switch>

       </table>
       
        </Router>
        
 </div>
    
  );
 
}
}



export default connect(null,{vehicleManufacturers})(App)