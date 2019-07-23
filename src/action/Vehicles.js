
export function fetchVehicles(){
	 return (dispatch) => {
    dispatch({ type: 'START_GETTING_VEHICLES' });
    return fetch('http://localhost:3000/vehicles')
      .then(response => response.json())
      .then(vehicles => dispatch({ type: 'FETCH_VEHICLES', vehicles}));
  };
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


