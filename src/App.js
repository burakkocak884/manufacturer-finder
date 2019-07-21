import React, {Component}from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import './App.css';
import VehicleIndex from './container/VehicleIndex';
import VehicleShow from './components/VehicleShow';
import FoundVehicleContainer from './container/FoundVehicleContainer'
import VehicleSearchForm from './components/VehicleSearchForm';
import {wishedCarHolder} from './container/VehicleIndex';
import WishListContainer from './container/WishListContainer'
import { theWishList } from './container/VehicleIndex';
import { Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';




    class App extends Component{
        state={
          vehicles: [],
          searchTerm: '',
          foundVehicles:[]
         
          }


//           handleChange=(event)=>{
//   this.setState({
//   searchTerm: event.target.value

// })
// }

      componentDidMount(){
           fetch("http://localhost:3000/vehicles")
           .then(res => res.json())
           .then(vehicles => this.setState({vehicles}))
          }
           


           vehiclesToFind = (word) =>{
               const foundCars = this.state.vehicles.filter(vehicle => vehicle.make.toLowerCase().includes(word.toLowerCase()))
               if (foundCars.length > 0){
                  return this.setState ({foundVehicles: foundCars})
               }else {
                return "No Cars Found";
           }}

           

           

           


    render(){
      console.log("app.js=", this.props)
        return (

        <Router>
          <div >
           <Link to="/"><button>Home</button></Link>
            <Link to="/vehicles"><button>List of Available Cars</button></Link>
             <Link to="/vehicles/wished"><button>My Wish List</button></Link>

            
           
            <FoundVehicleContainer  foundCars={this.state.foundVehicles}/> 
            <VehicleSearchForm searchTerm={this.vehiclesToFind}/>
          
           
          

        
            <Switch>
             <Route path="/vehicles/:id" render={({match})=>(<VehicleShow {...this.state.vehicles.find(p => p.id === parseInt(match.params.id))}/>)}/>
             <Route path="/vehicles" render={()=> (<VehicleIndex vehicles={this.state.vehicles} addWishList={this.addWishList} deleteCar={this.deleteCar}/>)}/> 
             <Route path="/" render={()=>(<h1>Welcome</h1>)}/>
             <Route path="/vehicles/foundVehicles" render={() => (<FoundVehicleContainer  foundCars={this.state.foundVehicles}/>) } />
             <Route path="/vehicles/wished" render={() => (<WishListContainer wishedCars={this.state.wishCarHolder}/>) } />
           </Switch>

       
        </div>
        </Router>
    
  );
 
}
}
const mapStateToProps = state => {

  return {
    vehicles: state.vehicles
  }


  }

export default connect(mapStateToProps)(App);
