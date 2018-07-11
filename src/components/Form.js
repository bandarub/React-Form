import React from 'react';
import {
    HashRouter,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';

import PersonalInformation from './PersonalInfo';
import SkillsLocation from './Skills_Location'; 
import Portfolio from './Portfolio';

import Summery from './TotalInfo';


const Home = (props) => (
    <div className="home">
    <h1> Welcome to Form</h1>
    <div className="navigation-container">
        <NavLink to="/PersonalInformation">Start</NavLink> 
    </div> 
  </div>
  ) ;
 
  const Form =(props)=>{
    return(<div>      
        <HashRouter>
            <div>
                <ul className="header-links">
                    <li className="link"><NavLink exact activeStyle ={{color:'#008CBA'}} to="/">Home</NavLink></li>
                    <li className="link"><NavLink exact activeStyle ={{color:'#008CBA'}} to="/PersonalInformation">Personal Information</NavLink></li>
                    <li className="link"><NavLink exact activeStyle ={{color:'#008CBA'}} to="/Skills&Location">Skills&Location</NavLink></li>
                    <li className="link"><NavLink exact activeStyle ={{color:'#008CBA'}} to="/Portfolio">Portfolio</NavLink></li>
                    <li className="link"><NavLink exact activeStyle ={{color:'#008CBA'}} to="/Summery">Summery</NavLink></li>
                    
                </ul>
                <form onSubmit={props.submit}>
                    <Switch>
                        <Route exact  path ="/" component={Home}/>
                        <Route exact  path ="/PersonalInformation" render={()=>(<PersonalInformation change={props.change} information={props.information} validate={props.validate} toggle={props.toggle} focusData={props.focusData}/>)}/>
                        <Route exact  path ="/Skills&Location" render={()=>(<SkillsLocation change={props.change} information={props.information} radio={props.radio} validate={props.validate} toggle={props.toggle} focusData={props.focusData}/>)} />
                        <Route exact path ="/Portfolio" render={()=>(<Portfolio change={props.change} information={props.information} validate={props.validate}  toggle={props.toggle} focusData={props.focusData}/>)} />  
                        <Route exact  path ="/Summery"render={()=>(<Summery change={props.change} information={props.information} validate={props.validate} deactive={props.deactive} toggle={props.toggle} focusData={props.focusData}/>)} />                     
                    </Switch>
                    </form>
                    
            </div>
        </HashRouter>
        
    </div>)
  }




export default Form ;