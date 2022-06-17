



export const findVehicles = searchVehicle => {
  
  if(searchVehicle.make !== '' && searchVehicle.year > 0){

return (dispatch) => {
                      dispatch({ type: 'START_GETTING_VEHICLES_MODELS' });
                      return fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${searchVehicle.make}/modelyear/${searchVehicle.year}?format=json`)
                      .then(response => response.json())
                      .then(foundManufacturers =>  {
                        dispatch({ type: 'FOUND_CAR_MAKERS', foundManufacturers, searchVehicle})
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
export const findManufacturer = manufacturerName => {


  return (dispatch) => {
    
    return fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetManufacturerDetails/${manufacturerName}?format=json`)
    .then(response => response.json())
    .then(foundManufacturers =>  {
      console.log("Search result of Manufacturers : ",foundManufacturers);
      dispatch({ type: 'FOUND_MANUFACTURERS', foundManufacturers})
    });
    }

}

export const addToContactList = manufacturerName => {
  debugger;
if(manufacturerName != null){
  return (dispatch) => {
    return fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetManufacturerDetails/${manufacturerName}?format=xml?format=json`)
    .then(response => response.json())
    .then(foundManufacturer =>  {
      dispatch({ type: 'ADD_TO_CONTACT_LIST', foundManufacturer})
    });
    }
}
  

  // return{
  //   type: 'ADD_TO_CONTACT_LIST',
  //   manufacturerName
  // }
}


export const getManufacturerDetails = manufacturerId => {
//   if(manufacturerId != null){
// //console.log("manu to search",searchVehicle)
// return (dispatch) => {
//                       return fetch(`https://vpic.nhtsa.dot.gov/api//vehicles/GetManufacturerDetails/${manufacturerId}?format=json`)
//                       .then(response => response.json())
//                       .then(foundManufacturer =>  {
//                         dispatch({ type: 'GET_MANUFACTURER_DETAIL', foundManufacturer})
//                       });
//                       }
//   }
}






