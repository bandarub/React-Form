import React from 'react';
import { NavLink} from 'react-router-dom';


const Summery = (props)=>{
return(<div className="totalInfo">
    <div className='summery'>
    <p><span>FullName:</span> {props.information.fullName}</p>
    <p><span>PhoneNumber:</span>{props.information.phoneNumber}</p>
    <p><span>Email:</span>{props.information.email}</p>
    <p><span>Address:</span>{props.information.address}</p>
    <p><span>City:</span>{props.information.city}</p>
    <p><span>State:</span>{props.information.state}</p>
    <p><span>Country:</span>{props.information.country}</p>
    <p><span>PostalCode:</span>{props.information.postalCode}</p>
    <p><span>HowHear:</span>{props.information.howHear}</p>
    <p><span>Decipline:</span>{props.information.decipline}</p>
    <p><span>Experience:</span>{props.information.experience}</p>
    <p><span>Slected Location(s):</span>{props.information.location}</p>
    <p><span>Porfolio link:</span>{props.information.link}</p>
    </div>
    <div className="navigation-container">
    <NavLink to="/Portfolio" className="bottom-navigation">back</NavLink>
    </div>  
    <NavLink to="/"><button className="submit-button" type="submit" onClick={props.submit} disabled={props.deactive}>Submit</button></NavLink>
    </div>
    )
}

export default Summery;