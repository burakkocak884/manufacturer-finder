import React, {Component}from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import './App.css';
import VehicleIndex from './container/VehicleIndex';
import VehicleShow from './components/VehicleShow';
import FoundVehicleContainer from './container/FoundVehicleContainer';

import VehicleCreateForm from './components/VehicleCreateForm';

import WishListContainer from './container/WishListContainer';

import { fetchVehicles } from './action/Vehicles';
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



      
      componentDidMount(){
        console.log('a')
        this.props.fetchVehicles()
        // this.props.vehicleManufacturers()
      //    this.interval = setInterval(() =>{
      //   this.props.fetchVehicles()
      // },250)
      console.log('b')
      //
      
      }


           


    render(){
      console.log('f')
      // console.log("app.js vehicles=", this.props)
        return (
<div class="main-display'">
        

        <Router>
          
           <Link to="/"><button>Home</button></Link>
            <Link to="/vehicles"><button>List of Available Cars</button></Link>
            
           <table>

            <table class ='main-screen'>
            <td>


            <FoundVehicleContainer  /> 
            
            
            <WishListContainer />
            <VehicleCreateForm />
            
            <VehicleShow />


            </td>
            </table>
            
            <Switch>
             
             <Route path="/vehicles" render={() => (<VehicleIndex />)}/> 
             <Route path="/vehicles/:id" render={() => (<VehicleShow />)}/> 
             <Route path="/vehicles/foundVehicles" render={() => (<FoundVehicleContainer  />)} />
             <Route path="/vehicles/wished" render={() => (<WishListContainer />) } />
          
           </Switch>

       </table>
       
        </Router>
        
 </div>
    
  );
 
}
}



export default connect(null,{fetchVehicles})(App)