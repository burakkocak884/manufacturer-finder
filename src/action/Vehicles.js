


export function fetchVehicles(){
	  console.log('c')
	 return (dispatch) => {
    dispatch({ type: 'START_GETTING_VEHICLES' });
    return fetch('http://localhost:3000/vehicles')
      .then(response => response.json())
      .then(vehicles =>  {
        console.log('d')
        dispatch({ type: 'FETCH_VEHICLES', vehicles})
      });
    console.log('e')
}


}


export const createVehicle = (vehicle) =>{
 
    return (dispatch) =>{
        return fetch('http://localhost:3000/vehicles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            vehicle
           
          })
        })
          .then(resp => resp.json())
          .then(vehicle => dispatch({type:"CREATE_VEHICLE", vehicle}))
          .catch(error => console.error(error))
    }
}


export const vehicleList = make => {

	return{
		type: 'FIND_VEHICLE',
		make
	}
}
export const vehicleDetail = vehicleId => {

	return{
		type: 'VEHICLE_DETAIL',
		vehicleId
	}
}

export const addToWishList = vehicleId => {

	return{
		type: 'ADD_TO_WISH',
		vehicleId
	}
}
export const deleteFromWish = vehicleId => {

	return{
		type: 'DELETE_FROM_WISH',
		vehicleId
	}
}
export const deleteVehicle = vehicleId => {

  return (dispatch) =>{
        return fetch('http://localhost:3000/vehicles/'+ vehicleId, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            vehicleId
           
          })
        })
          .then(resp => resp.json())
          .then(vehicle => dispatch({type:"DELETE_VEHICLE", vehicleId}))
          .catch(error => console.error(error))
    }
}

// export function vehicleManufacturers(){
  
//    return (dispatch) => {
//     dispatch({ type: 'START_GETTING_MANUFACTURERS' });
//     return fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
//       .then(response => response.json())
//       .then(vehicleManufacturers =>  {
//         console.log('vehicle makers=',vehicleManufacturers)
//         dispatch({ type: 'FETCH_MANUFACTURERS', vehicleManufacturers})
//       });
    
// }


// }
// export const findManufacturer = manu => {

//   return{
//     type: 'FIND_MANUFACTURER',
//     manu
//   }
// }






