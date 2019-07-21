export default function manageVehicle(state = {
 wishCarHolder: [], vehicles:[]
}, action) {
console.log("action=",action)
console.log('state=',state)
  switch (action.type) {
  
   
      
      case 'DELETE_FROM_WISH':
      return{wishCarHolder: state.wishCarHolder.filter(vehicle => vehicle.id !== action.id)}

    default:
      return state;
  }
};