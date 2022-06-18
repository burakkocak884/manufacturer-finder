



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
  let str = 'Generating Data...';
  return (dispatch) => {
    dispatch({ type: 'GETTING_MANUFACTURERS', str });
    return fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetManufacturerDetails/${manufacturerName}?format=json`)
    .then(response => response.json())
    .then(foundManufacturers =>  {
      dispatch({ type: 'FOUND_MANUFACTURERS', foundManufacturers})
    });
    }
}

export const addToContactList = manufacturerName => {
  
if(manufacturerName != null){
  return (dispatch) => {
    return fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetManufacturerDetails/${manufacturerName}?format=xml?format=json`)
    .then(response => response.json())
    .then(foundManufacturer =>  {
      dispatch({ type: 'ADD_TO_CONTACT_LIST', foundManufacturer})
    });
    }
  }
}


export const getManufacturerDetails = manufacturerId => {
// to do
}






