import React from 'react';
import { NavLink} from 'react-router-dom';

const  PersonalInformation =(props)=>{    
    return(
            <div>          
            <div className="PersonalInfo">
            <div className="headings"> <h4>1. Personal information</h4></div>
            <div className="personal-container1">               
                <div className="name">                   
                    <div className={props.focusData.fullName &&
                                props.validate.fullName ? 'invalid' : ''
                               }>
                        <input 
                            value={props.information.fullName} 
                            onChange={props.change} 
                            name='fullName'                            
                            onBlur={props.toggle}
                            type="text" id="full-name" placeholder="Full Name*" />
                        <label>Full Name</label>  
                       {props.focusData.fullName&&props.validate.fullName && <span>{props.validate.fullName}</span> }                   
                    </div>                  
                    <div className={props.focusData.email &&
                                props.validate.email ? 'invalid' : ''
                               }>
                        <input 
                          value={props.information.email} 
                          name='email'
                          onBlur={props.toggle}
                          className={props.validate.email ? 'invalid' : ''}
                          onChange={props.change}
                          type="email" id="email" placeholder="Email*"/>
                        <label>Email</label>
                            {props.focusData.email&&props.validate.email && <span className="error-msg">{props.validate.email}</span> }                        
                    </div>
                    <div className={props.focusData.emailAgain &&
                                props.validate.emailAgain ? 'invalid' : ''
                               }>
                        <input
                         value={props.information.emailAgain} 
                         name='emailAgain'  
                         onBlur={props.toggle}
                        onChange={props.change}
                         type="email" id="email1" placeholder="Re-enter Email"/>
                        <label>Re-enter Email</label>
                            {props.focusData.emailAgain&&props.validate.emailAgain&&<span className="error-msg">{props.validate.emailAgain}</span>}                         
                                          
                    </div>              
                </div> 
                <div className="phone-number">
                    <div className={props.focusData.phoneNumber &&
                                props.validate.phoneNumber ? 'invalid' : ''
                               }> 
                        <input 
                          value={props.information.phoneNumber} 
                          name='phoneNumber'
                          onBlur={props.toggle}
                          className={props.validate.phoneNumber ? 'invalid' : ''}
                          onChange={props.change}
                          type="tel" id="phone" placeholder="Phone*"/>
                        <label>Phone Number</label>
                            {props.focusData.phoneNumber&&props.validate.phoneNumber&&<span className="error-msg">{props.validate.phoneNumber}</span> }                       
                        
                    </div>   
                </div>
            </div>
            <div className="personal-container2">
                <div className="adderess">
                    <div id="adderess" className={props.focusData.address &&
                                props.validate.address ? 'invalid' : ''
                               }>                       
                        <input
                            value={props.information.address} 
                            name='address' 
                            onChange={props.change}
                            onBlur={props.toggle}
                            type="text"  placeholder="Adderess*"/>
                        <label>Adderess</label>
                        {props.focusData.address&&props.validate.address&&<span className="error-msg">{props.validate.address}</span>}
                        <input type="text"/>
                    </div> 
                    <div  className="place" >                
                         <div className={props.focusData.city &&
                                props.validate.city ? 'invalid' : ''
                               }>                           
                            <input
                                value={props.information.city} 
                                name='city'
                                onChange={props.change} 
                                onBlur={props.toggle}
                                type="text" id="city" placeholder="City* "/>
                            <label>City</label>
                            {props.focusData.city&&props.validate.city&&<span className="error-msg">{props.validate.city}</span>}
                          
                        </div> 
                        <div className={props.focusData.state &&
                                props.validate.state ? 'invalid' : ''
                               }>                            
                            <input 
                                value={props.information.state} 
                                name='state'
                                onChange={props.change} 
                                onBlur={props.toggle}
                                type="text"id="state" placeholder="State"/>
                            <label>State</label>
                            {props.focusData.state&&props.validate.state&&<span className="error-msg">{props.validate.state}</span>}
                             
                        </div> 
                        <div className={props.focusData.country &&
                                props.validate.country ? 'invalid' : ''
                               }> 
                            <input
                                value={props.information.country}
                                name='country' 
                                onChange={props.change} 
                                onBlur={props.toggle}
                                type="text" id="country" placeholder="Country/Region*"/>
                                <label>Country</label>
                                {props.focusData.country&&props.validate.country&&<span className="error-msg">{props.validate.country}</span>}
                           
                        </div>  
                        <div className={props.focusData.postalCode &&
                                props.validate.postalCode ? 'invalid' : ''
                               }>                             
                            <input
                                value={props.information.postalCode} 
                                name='postalCode'
                                onChange={props.change}
                                onBlur={props.toggle}
                                type="number" id="zipcode" placeholder="Zip/Postal Code*"/>
                                <label>Zipcode</label>
                                {props.focusData.postalCode&&props.validate.postalCode&&<span className="error-msg">{props.validate.address}</span>}
                            
                        </div>                  
                    </div>
                    <input type="text" name='howHear' onChange={props.change} onBlur={props.toggle} value={props.information.howHere} placeholder=" How did you hear about us"/>
            </div>
        </div>               
        
    </div> 
        <div  className="navigation-container"> 
            <NavLink to="/" className="bottom-navigation">back</NavLink>        
            <NavLink to="/Skills&Location" className="bottom-navigation">next</NavLink>
        </div>
    </div>
    
        );
 

    
}

export default PersonalInformation;