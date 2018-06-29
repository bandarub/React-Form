import React from 'react';
import { NavLink} from 'react-router-dom';


const SkillsLocation = (props) =>{
       return(
           <div>
           
                <div className="skills-location">
                    <div className="headings">
                        <h4>2. Skills and location</h4>
                    </div>
                    <h4>which is your primary design decipline?*</h4>
                    <div className={props.validate.decipline?'invalid':''}>
                    <div className="radio">
                        <div>
                        <input  id="btn1" 
                                value = "Design Research"
                                type="radio" name="decipline" 
                                checked={props.information.decipline==='Design Research'}                                
                                onChange={props.change}
                                onClick={props.toggle}
                        /> 
                                <label htmlFor="btn1" className="checkbox" >Design Research </label>
                        </div>
                        <div>
                        <input  id="btn2" 
                                value = "Visual Design" 
                                type="radio" name="decipline" 
                                checked={props.information.decipline==='Visual Design'}                                
                                onFocus={props.toggle}
                                onClick={props.change}  /> 
                                <label htmlFor="btn2" className="checkbox">Visual Design</label>
                        </div>
                        <div>
                        <input  id="btn3" 
                                value = "UX Design"  
                                type="radio" 
                                name="decipline" 
                                checked={props.information.decipline==='UX Design'}       
                                onFocus={props.toggle}
                                onClick={props.change} /> 
                                <label htmlFor="btn3"className="checkbox">UX Design</label>
                        </div>
                        <div>
                        <input  id="btn4" 
                                value = "Front-end-Dev"  
                                type="radio" name="decipline" 
                                checked={props.information.decipline==='Front-end-Dev'}                                
                                onFocus={props.toggle}
                                onClick={props.change} />
                                <label htmlFor="btn4" className="checkbox"> Front-end-Dev</label>
                        </div>
                    </div> 
                    {<span className='error-msg'>{props.validate.decipline}</span>}
                     </div>                 
                    <div className="check-box" >
                        <div className={props.validate.experience?'invalid':''}>
                        <div className="left">
                            <h4>Do you have experience with any other deceplines?*</h4>
                            <div>
                                <div className="left-checkbox">
                                    <div>
                                        <input  id="left-checked1" 
                                                type="checkbox" 
                                                name='experience' 
                                                value='Visual Design'  
                                                checked={props.information.experience.includes('Visual Design')}
                                                onChange={props.change}
                                                onClick={props.toggle}    />
                                                <label htmlFor="left-checked1" className="checkbox">Visual Design   </label>
                                    </div>
                                    <div>
                                        <input  id="left-checked2" 
                                                type="checkbox" 
                                                name='experience'  
                                                value='UX Design'  
                                                checked={props.information.experience.includes('UX Design')}
                                                onClick={props.toggle} 
                                                onChange={props.change}/>
                                            <label htmlFor="left-checked2" className="checkbox">UX Design</label>
                                    </div>
                                    <div>
                                        <input   id="left-checked3"
                                                 type="checkbox" 
                                                 name='experience' 
                                                 value='Frontend-dev' 
                                                 checked={props.information.experience.includes('Frontend-dev')}
                                                 onChange={props.change} 
                                                onClick={props.toggle}
                                                    />
                                            <label htmlFor="left-checked3" className="checkbox">Frontend-dev </label>
                                    </div>                       
                                </div>
                                {props.focusData.experience&&props.validate.experience&&<span className='error-msg'>{props.validate.experience}</span>}
                            </div>
                        </div>                        
                        </div>                        
                        <div className="right">
                            <h4>Where are you interested in working?*</h4>
                            <p>you must leagally authorized to work without visa and sponsership in the region you chosen</p>
                            <div>
                                                             
                                <div>               
                                <div className="right-checkbox">
                                    <div>
                                        <input  id="right-checked1" 
                                                type="checkbox" 
                                                name='location' 
                                                value='Austin, Texas' 
                                                checked={props.information.location.includes('Austin, Texas')}                                                
                                                onChange={props.change}
                                                onClick={props.toggle}
                                                />
                                            <label htmlFor="right-checked1" className="checkbox">Austin, Texas </label>
                                    </div>
                                    <div>
                                        <input id="right-checked2" 
                                                type="checkbox" 
                                                name='location' 
                                                value='New York,New York'
                                                checked={props.information.location.includes('New York,New York')}                                                 
                                                onChange={props.change}
                                                onClick={props.toggle}
                                                />
                                        <label htmlFor="right-checked2" className="checkbox">New York,New York </label>
                                    </div>    
                                    <div>
                                        <input  id="right-checked3" 
                                                type="checkbox" 
                                                name='location' 
                                                value='Toronto, Canada' 
                                                checked={props.information.location.includes('Toronto, Canada')}                                     
                                                onChange={props.change}
                                                onClick={props.toggle}
                                                />
                                            <label htmlFor="right-checked3" className="checkbox">Toronto, Canada </label>
                                    </div>
                                    <div>
                                        <input  id="right-checked4" 
                                                type="checkbox" 
                                                name='location' 
                                                value='Shanghai, China'
                                                checked={props.information.location.includes('Shanghai, China')}                                     
                                                onChange={props.change}
                                                onClick={props.toggle}
                                                />
                                        <label htmlFor="right-checked4" className="checkbox">Shanghai, China
                                        </label>
                                    </div>
                                    <div>
                                        <input  id="right-checked5" 
                                                type="checkbox" 
                                                name='location' 
                                                value='Dublin, Ireland' 
                                                checked={props.information.location.includes('Dublin, Ireland')}                                     
                                                onChange={props.change}
                                                onClick={props.toggle}
                                                />
                                        <label htmlFor="right-checked5" className="checkbox">Dublin, Ireland
                                        </label>
                                    </div> 
                                    <div>
                                        <input id="right-checked6" 
                                                type="checkbox" 
                                                name='location' 
                                                value='Hursley, United Kingdom' 
                                                checked={props.information.location.includes('Hursley, United Kingdom')}                                     
                                                onChange={props.change}
                                                onClick={props.toggle}
                                                />
                                        <label htmlFor="right-checked6" className="checkbox">Hursley, United Kingdom
                                        </label>
                                    </div>  
                                    <div>
                                        <input id="right-checked7" 
                                                type="checkbox" 
                                                name='location'  
                                                value='Boeblingen, Germany' 
                                                checked={props.information.location.includes('Boeblingen, Germany')}                                     
                                                onChange={props.change}
                                                onClick={props.toggle}
                                                />
                                        <label htmlFor="right-checked7" className="checkbox">Boeblingen, Germany
                                        </label>
                                    </div>
                                    <div>
                                        <input id="right-checked8"
                                                 type="checkbox" 
                                                 name='location' 
                                                 value='Somewhere else' 
                                                checked={props.information.location.includes('Somewhere else')}                                     
                                                onChange={props.change}
                                                onClick={props.toggle}
                                                />
                                        <label htmlFor="right-checked8" className="checkbox">Somewhere else
                                        </label>
                                    </div>                                 
                                </div>
                                {props.focusData.location&&props.validate.location&&<span className='error-msg'>{props.validate.location}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
        
            <div className="navigation-container">
            <NavLink to="/PersonalInformation" className="bottom-navigation">back</NavLink>        
            <NavLink to="/Portfolio" className="bottom-navigation">next</NavLink>
            </div>
            </div>
        )
    
}

export default SkillsLocation;