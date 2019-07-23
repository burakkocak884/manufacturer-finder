export default function manageVehicle(state = {
  vehicles:[], foundVehicles: [],  theDetailCar: [], wishCarHolder: []
}, action) {

console.log('foundVehicles=',state)

  switch (action.type) {
      


       case 'FETCH_VEHICLES':
       // console.log('vehicles in action=',action.vehicles)
       console.log("action=",action)
       return {vehicles: action.vehicles};

       
      case 'FIND_VEHICLES':
      const myCar= state.vehicles.filter(vehicle => vehicle.make.toLowerCase() === action.make.toLowerCase())
     
      return{...state,foundVehicles: myCar }
    
      case 'VEHICLE_DETAIL':
      const theCar = state.vehicles.find(vehicle => vehicle.id === action.vehicleId)
    
   	  return {...state, theDetailCar: theCar};



      case 'ADD_TO_WISH':
 if(!state.wishCarHolder){
     return {...state,wishCarHolder: [state.theDetailCar]};
 }else{
 	 return {...state,wishCarHolder: [...state.wishCarHolder, state.theDetailCar]};
 }


     case 'DELETE_FROM_WISH':

     const newWishList = state.wishCarHolder.filter(c => c.id !== action.vehicleId)
  
     return {wishCarHolder: newWishList}
     



    default:
      return state;

  }
   
};