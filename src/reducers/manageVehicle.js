export default function manageVehicle(state = {
  vehicles:[], foundVehicles: [],wishCarHolder: [], theDetailCar: []
}, action) {
console.log("action header=",action)
console.log('state=',state)

  switch (action.type) {
      


       case 'FETCH_VEHICLES':
       // console.log('vehicles in action=',action.vehicles)
       console.log("action=",action)
       return {vehicles: action.vehicles};

       
      case 'FIND_VEHICLES':
      return{foundVehicles: state.vehicles.filter(vehicle => vehicle.make.toLowerCase() === action.make.toLowerCase())}
     
      case 'VEHICLE_DETAIL':
      const theCar = state.vehicles.find(vehicle => vehicle.id === action.id)
   	  return {theDetailCar: theCar};



      case 'ADD_TO_WISH':
     debugger
      
    
      //...state, restaurants: state.restaurants.concat(restaurant)
     return {wishCarHolder: state.vehicles.find(vehicle => vehicle.id === action.vehicleId)};




    default:
      return state;
  }
   
};