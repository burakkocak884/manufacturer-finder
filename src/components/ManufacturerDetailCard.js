import React from 'react';
import {Label} from 'semantic-ui-react';


const ManufacturerDetailCard = props =>{

    if(props.displayDetail && props.displayDetail.Mfr_ID && props.displayDetail.Mfr_ID > 0)
    { 
        const {displayDetail} = props;
        let screenSize = window.innerWidth;
        let hideCard = false;

        if(hideCard)
        {
            hideCard = false;
            return (<div></div>)
        }
        else
        {
            return(
                <div className = "manu-card">
                    
                    <div className = 'manu-detail-card'>
                        <div className = 'manu-card-content'>
                            <h5>{displayDetail.Mfr_Name}</h5>
                            <Label className='manu-detail-card-header'>Contact</Label>
                            <p>{displayDetail.PrincipalPosition}  {displayDetail.PrincipalFirstName}</p>
                            <p> Email : {displayDetail.ContactEmail ? displayDetail.ContactEmail : 'N/A'}  ,  Phone : {displayDetail.ContactPhone ? displayDetail.ContactPhone : 'N/A'}</p>
                            
                            
                            <p>Address : {displayDetail.Address ? displayDetail.Address: 'N/A'}  {displayDetail.Address2 ? displayDetail.Address2 : ''}</p>
                            <p>{displayDetail.City ? displayDetail.City : ''} {displayDetail.StateProvince ? ', ' + displayDetail.StateProvince: ''}   {displayDetail.PostalCode ? displayDetail.PostalCode: ''} , {displayDetail.Country ? displayDetail.Country : ''}</p>
                            
                            <Label className='manu-detail-card-header'>Vehicle Type Information(if available)</Label>
                                {displayDetail.VehicleTypes.map((t, index)=>(<div>
                                    <p>{t.Name} : {t.GVWRFrom}</p>
                                    <p>{t.Name} : {t.GVWRTo}</p>
                                   
                                    </div>
                                ))}
                            {/* <div className='manu-card-hide'>
                                {screenSize < 800 ? <Button className = 'manu-card-button' onClick={handleClick}>Hide</Button> : <p></p> }
                            </div> */}
                        </div>
                    </div>
                </div>
            )
        }
    }
    else
    {
        return(<div></div>)
    }
        
        
}

export default ManufacturerDetailCard;