import React from 'react';
import { Link } from 'react-router-dom';
import femme from '../images/femme.jpg';

const ContactDetails = (props) => {
    console.log(props)
        return (
            <div className='ui main'>
                <div className="ui centered card">
                    <div className="image">
                        <img src={femme} alt="femme_noir"/> 
                    </div>    
                    <div className="content">
                        <div className="header">nom</div>
                        <div className='description'>sene@gmail.com</div>
                    </div> 
                    <Link to="/">
                        <button className='ui fluid button blue'>List Contact</button>
                    </Link>   
                </div>
            </div>
        )
    
}

export default ContactDetails;