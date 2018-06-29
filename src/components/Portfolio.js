import React  from 'react';
import { NavLink} from 'react-router-dom';



const Portfolio =(props)=>{
       return(
            <div className="portfolio">
            <div className="headings"><h4>3. Portfolio</h4> </div>
                <div>
                    <p>Prove thet you are next IBM'S greatest designer by showing us who you are.What you have done.How you think. Tell us your story</p>
                    <input 
                        value={props.information.link} 
                        onChange={props.change} 
                        className={props.focusData.link &&
                            props.validate.link ? 'invalid' : ''
                           }
                        onBlur={props.toggle}
                        name='link'
                        type='link' placeholder='Portfolio link'/>
                        {props.focusData.link && props.validate.link&& <span className='error-msg'>{props.validate.link}</span>}
                    <textarea 
                        value={props.information.anythingElse} 
                        name='anythingElse'
                        onChange={props.change} 
                        onFocus={props.toggle}                        
                        placeholder="Anything else?(another link,availability,etc.)?" >
                    </textarea>
                </div>
            <div className="navigation-container">
            <NavLink to="/Skills&Location" className="bottom-navigation">back</NavLink>
            <NavLink to="/Summery" className="bottom-navigation">Summery</NavLink> 
            </div>            
            </div>
        );

    }


export default Portfolio;