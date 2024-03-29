import React, {Component}from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import './App.css';
import FoundManufacturerContainer from './container/FoundManufacturerContainer';
import ContactListContainer from './container/ContactListContainer';
import {vehicleManufacturers , screenSizeHandler} from './action/Vehicles';
import VehicleManufacturerContainer from './container/VehicleManufacturerContainer';
import { connect } from 'react-redux';
import {Form, Button, Label} from 'semantic-ui-react';


class App extends Component{


    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }// end componentDidMount
    
    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.handleWindowSizeChange);
    // }// end componentWillUnmount
    
    handleWindowSizeChange = () => {
        this.props.screenSizeHandler(window.innerWidth); 
    }
    
    
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

                                        <div className="data-container">
                                            <div className ='main-screen'>
                                                    <br></br>
                                                    <ContactListContainer />
                                                    <VehicleManufacturerContainer />
                                                    <FoundManufacturerContainer  /> 
                                            </div>

                                            <Switch>
                                                <Route path="/vehicles/foundVehicles" render={() => (<FoundManufacturerContainer  />)} />
                                            </Switch>
                                        </div>
                                </Router>
                                <div className="copy-right-label">
                                    <Label className="nav-label">&copy; {currentYear} <strong>Burak Kocak</strong></Label>
                                </div>
                        </div>
                );
    }
}



export default connect(null,{vehicleManufacturers, screenSizeHandler})(App)