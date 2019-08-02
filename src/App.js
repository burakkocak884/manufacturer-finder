import React, {Component}from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import './App.css';
import VehicleIndex from './container/VehicleIndex';

import FoundManufacturerContainer from './container/FoundManufacturerContainer';

import VehicleCreateForm from './components/VehicleCreateForm';

import WishListContainer from './container/WishListContainer';

import { fetchVehicles, vehicleManufacturers } from './action/Vehicles';
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
            <Link to="/vehicles"><button>List of Available Cars</button></Link>
            <Link to="/vehicle_manufacturers" onClick={() => this.props.vehicleManufacturers()}><button>Get All Vehicle Manufacturers</button></Link>
           <table>

            <table class ='main-screen'>
            <td>


            <FoundManufacturerContainer  /> 
            <VehicleManufacturerContainer />
            
            <WishListContainer />
            
            
            


            </td>
            </table>
            
            <Switch>
             
             <Route path="/vehicles" render={() => (<VehicleIndex />)}/> 
             
             <Route path="/vehicles/foundVehicles" render={() => (<FoundManufacturerContainer  />)} />
             <Route path="/vehicles/wished" render={() => (<WishListContainer />) } />
             <Route path="/vehicle_manufacturers" render={() => (<VehicleManufacturerContainer />)}/> 
           </Switch>

       </table>
       
        </Router>
        
 </div>
    
  );
 
}
}



export default connect(null,{fetchVehicles, vehicleManufacturers})(App)