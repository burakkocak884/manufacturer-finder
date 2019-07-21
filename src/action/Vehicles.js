



export const addToWishList = vehicleId => {

	return{
		type: 'ADD_TO_WISH',
		vehicleId
	}
}
export const deleteFromWishList = vehicleId => {

	return{
		type: 'DELETE_FROM_WISH',
		vehicleId
	}
}


export const deleteVehicle = vehicleId => {

	return{
		type: 'DELETE_VEHICLE',
		vehicleId
	}
}