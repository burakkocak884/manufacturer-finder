import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageVehicle(state = {
   foundManufacturers: [],   contactList: [], loading: false,manufacturers:[], searchCriteria:{}
}, action) {

// console.log('all vehicles=',state.vehicles)

  switch (action.type) {

       case 'FOUND_MANUFACTURERS':
       return {foundManufacturers: action.foundManufacturers.Results, searchCriteria: action.searchVehicle}
       
      case 'DELETE_FROM_CONTACT':
      const newContactList = state.contactList.filter(c => c.Make_ID !== action.conId)
      return {contactList: newContactList}

       case 'CREATE_VEHICLE':
      // console.log("brand new car", action.vehicle)
      const theNewCar = action.vehicle
       if(!state.vehicles){
         return{...state, vehicles: state.vehicles.concat(theNewCar)}
       }


       case "DELETE_VEHICLE":
       const newList = state.vehicles.filter(v => v.id !== action.vehicleId)
       return newList;

      case'FETCH_MANUFACTURERS':
      return{vehicleManufacturers: action.vehicleManufacturers.Results}
   


      case 'FIND_MANUFACTURER':
      const manufacturer = state.vehicleManufacturers.filter(m => (""+m.Make_Name.toLowerCase()+"").includes(""+action.manu.toLowerCase().trim()+""))
      return {...state,manufacturers: manufacturer};

      
      case 'ADD_TO_CONTACT_LIST':
      if(!state.contactList)
      {
        return{...state,contactList: [action.cManu]}
      }
      else
      {
        let existManu = state.contactList.find(e => e.Make_ID === action.cManu.Make_ID)
        if(!existManu){
        return{...state,contactList: [...state.contactList, action.cManu]}
      }

}

   
     

     default:
      return state;

  }
   
};

