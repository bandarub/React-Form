import React, { Component } from 'react';
import './App.css'
import Form from './components/Form';
import Header from './components/Header';

import Footer from './components/Footer';

class App extends Component {
  state = {
    fullName:'',
    phoneNumber:'',
    email:'',
    emailAgain:'',
    address:'',
    city:'',
    state:'',
    country:'',
    postalCode:'',
    howHear:'',
    decipline:'',
    experience:[],
    location:[],
    link:'',
    anythingElse:''  ,
    isTouched:{fullName:false,
      phoneNumber:false,
      email:false,
      emailAgain:false,
      address:false,
      city:false,
      state:false,
      country:false,
      postalCode:false,
      howHear:false,
      decipline:false,
      experience:false,
      location:false,
      link:false,
      anythingElse:false
    }
  
  }
  handleUpdate=(e)=>{
   e!==undefined &&
   e.target.type!=='checkbox'
   ? this.setState({[e.target.name]:e.target.value}) 
   : this.setState({[e.target.name]: !this.state[e.target.name].includes(e.target.value) 
      ? [...this.state[e.target.name]].concat(e.target.value)
      : [...this.state[e.target.name]].filter(item=>item!==e.target.value)})
  }
  handleSubmit=(e)=>{
   e.preventDefault();  
   let info=[];
   info.push({...this.state});  
    
  }  
  handleFocus=(e)=>{  
  const field=e.target.name;  
  this.setState(prevState=>({isTouched:{
                            ...prevState.isTouched,
                            [field]:true}}));
  }

validate = (fullName,phoneNumber,email,emailAgain,
            address,city,state,country,postalCode,howHear,
            decipline,experience,location,link,anythingElse) => {
const errors = {
  fullName:/[a-zA-Z]+[\s|.][a-zA-Z]+$/.test(fullName)
            ?''
            :'Please enter full Name(FirstName LastName)',
  phoneNumber:/^(0{2}|\+)[0-9]{3}[0-9]{9}/.test(phoneNumber)
              ?''
              :'Enter phone number in international format',
  email:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)
        ?''
        :'Enter valid email.adderess',
  emailAgain:email===emailAgain
            ?''
            :'Email address should match',
  address:/[\w|[a-zA-Z.:]+[\s|\W|\d]+[\w+|\s\d]+/.test(address)
          ?''
          :'Enter valid adderess',
  postalCode:/^[0-9]{3,6}$/.test(postalCode)
            ?''
            :'Enter valid Postal Code',
  city:/[a-zA-Z]+/.test(city)
      ?''
      :'City Name should contain alphabets',
  state:/[a-zA-Z]+/.test(state)
      ?''
      :'State Name should contain alphabets',
  country:/[a-zA-Z]+/.test(country)
      ?''
      :'Country Name should contain alphabets',
  link:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(link)
      ?''
      :'Enter Valid link',
  decipline:decipline
            ?''
            :'You should select atleast one decipline',
  experience:experience.length
            ?''
            :'Please select atlest one experience field',
  location:location.length
          ?''
          :'Select atleast one Location'
}

return errors;
}

isSubmitDisabled = errors => {
 return Object.values(errors).some(errMsg => {
    return errMsg;
  }); 
};

  render() {
    const {fullName,phoneNumber,
            email,emailAgain,
            address,city,state,country,postalCode,howHear,
            decipline,experience,location,link,anythingElse} = this.state
    
    const errors = this.validate(fullName,phoneNumber,email,emailAgain,
                                  address,city,state,country,postalCode,howHear,
                                  decipline,experience,location,link,anythingElse);
    return (
      <div className="App">
        <Header/>      
        <Form change = {this.handleUpdate} submit = {this.handleSubmit } validate={errors} information={this.state} deactive={this.isSubmitDisabled(errors)} toggle={this.handleFocus} focusData={this.state.isTouched}/>        
        <Footer/> 
      </div>
    );
  }
}

export default App;
