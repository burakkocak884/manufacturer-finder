import cuid from 'cuid';
//import { isDebuggerStatement } from '@babel/types';
//import { isDebuggerStatement } from 'typescript';
export const cuidFn = cuid;

export default function manageVehicle(state = {
   foundManufacturers: [],foundCarMakers: [],  contactList: [], loading: false,manufacturers:[], searchCriteria:{}, foundManufacturer: {},
}, action) {

  switch (action.type) {

      case 'FOUND_MANUFACTURERS':
        return {foundManufacturers: action.foundManufacturers.Results }

      case 'GETTING_MANUFACTURERS':
        return {promiseDisplay: action.str}

      case 'FOUND_CAR_MAKERS':
        return {foundCarMakers: action.foundManufacturers.Results }
      
      case 'DELETE_FROM_CONTACT':
        const newContactList = state.contactList.filter(c => c.Make_ID !== action.conId)
        return {contactList: newContactList}

      case 'CREATE_VEHICLE':
        const theNewCar = action.vehicle
        if(!state.vehicles){
          return{...state, vehicles: state.vehicles.concat(theNewCar)}
        }
        break;

      case "DELETE_VEHICLE":
        const newList = state.vehicles.filter(v => v.id !== action.vehicleId)
        return newList;

      case'FETCH_MANUFACTURERS':
        return{vehicleManufacturers: action.vehicleManufacturers.Results}

      case 'FIND_MANUFACTURER':
        const manufacturer = state.vehicleManufacturers.filter(m => (""+m.Make_Name.toLowerCase()+"").includes(""+action.manu.toLowerCase().trim()+""))
        return {...state,manufacturers: manufacturer};

      case 'ADD_TO_CONTACT_LIST':
        if(state.contactList != null && state.contactList.length > 0)
        {
          return{...state,contactList: [action.cManu]}
        }
        else
        {
          let existManu = state.vehicleManufacturers.find(e => e.Make_ID === action.manufacturerName.Make_ID)
          if(!existManu){
          return{...state,contactList: [...state.contactList, action.manufacturerName.Make_Name]}
        }
        break;
    }
     default:
      return state;

  }
   
};

