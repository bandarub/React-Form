import React from 'react';

const Footer = ()=>{
    return( <div className="copyright-container">
    <p>COPYRIGHT©2003-2012. ALL RIGHTS RESERVED</p>
    <div className="copyright-icons">
        <div className="media">
            <i  className="fa fa-twitter-square"></i>
            <p className="mediaText">Twitter</p>
        </div>
        <div className="media">
            <i className="fa fa-facebook-square"></i>
            <p className="mediaText">Facebook</p>
        </div>
        <div className="media">
            <i className="fa fa-vimeo-square"></i>
            <p className="mediaText">Vimeo</p>
        </div >
        <div className="media">
            <i className="fa fa-facebook-square"></i>
            <p className="mediaText">Facebook</p>
        </div>
        <div className="media">
            <i className="fa fa-google-plus-square"></i>
            <p className="mediaText">Google Plus</p>
        </div>
        <div className="media">
            <i className="fa fa-pinterest-square"></i>
            <p className="mediaText">Pintrest</p>
        </div>        
    </div>     
</div>)
}
export default Footer;