



export const findVehicles = searchVehicle => {
  
  if(searchVehicle.make !== '' && searchVehicle.year > 0){
//console.log("manu to search",searchVehicle)
return (dispatch) => {
    dispatch({ type: 'START_GETTING_VEHICLES_MODELS' });
    return fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${searchVehicle.make}/modelyear/${searchVehicle.year}?format=json`)
    .then(response => response.json())
    .then(foundManufacturers =>  {
      dispatch({ type: 'FOUND_MANUFACTURERS', foundManufacturers, searchVehicle})
      
    });
}
  }

}



export const deleteContact = conId => {

	return{
		type: 'DELETE_FROM_CONTACT',
		conId
	}
}

export function vehicleManufacturers(){
  
   return (dispatch) => {
    dispatch({ type: 'START_GETTING_MANUFACTURERS' });
    return fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
      .then(response => response.json())
      .then(vehicleManufacturers =>  {
        dispatch({ type: 'FETCH_MANUFACTURERS', vehicleManufacturers})
      });
    
}


}
export const findManufacturer = manu => {

  return{
    type: 'FIND_MANUFACTURER',
    manu
  }
}






