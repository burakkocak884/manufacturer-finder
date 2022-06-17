import React, {Component}from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import './App.css';
import FoundManufacturerContainer from './container/FoundManufacturerContainer';
import ContactListContainer from './container/ContactListContainer';
import {vehicleManufacturers, getManufacturerDetails } from './action/Vehicles';
import VehicleManufacturerContainer from './container/VehicleManufacturerContainer';
import { connect } from 'react-redux';
import {Form, Button, Label} from 'semantic-ui-react';


    class App extends Component{
        
      render(){
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
          return (
              <div className="main-display'">
        

        <Router>
            <div>
            <div className="nav-button-container">
                <Link to="/">
                    <Form.Field>
                     <Button className="nav-button">Home</Button>
                    </Form.Field>
                </Link>

                <Link to="/vehicle_manufacturers" onClick={() => this.props.vehicleManufacturers()}>
                    <Form.Field>
                        <Button className="nav-button">Get List of All Manufacturers in U.S.A.</Button>
                    </Form.Field>
                </Link>
                
                </div>
                
                </div>
               
                <table className="data-container">
                     <table className ='main-screen'>
                        <td>
                        <FoundManufacturerContainer  /> 
                        <ContactListContainer />
                        <VehicleManufacturerContainer />
                        </td>
                     </table>

                    <Switch>
                    <Route path="/vehicles/foundVehicles" render={() => (<FoundManufacturerContainer  />)} />
                    </Switch>
                </table>
       
                </Router>
                <div className="copy-right-label">
                    <Label className="nav-label">&copy; {currentYear} <strong>Burak Kocak</strong></Label>
                </div>
              </div>
            );}
}



export default connect(null,{vehicleManufacturers, getManufacturerDetails})(App)