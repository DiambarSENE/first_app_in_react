import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.jpg';
import ContactDetails from './ContactDetails';

const ContactCard = (props) => {
  const {id,nom,email} = props.contacts;
  return (
    <div className="item">
      <img className="ui avatar image" src={avatar} alt="avatar"></img>
          <div className="content">
            <Link to={{ pathname:`/${id}`, state:{ contacts:props.contacts} }}>
              <div className="header">{nom}</div> 
              <div className="description">{email}</div>
            </Link>
    
          </div>  
          <i className="trash alternate outline icon right floated" style={{color:'red', marginTop:"7px", marginLeft:"10px"}}
                      onClick={() => props.newContactList(id)}
          ></i>
            <Link to={{ pathname:`/edit`, state:{ contacts:props.contacts}}}>
              <i className="edit alternate outline icon right floated" style={{color:'blue', marginTop:"7px"}}></i>
            </Link>   
    </div>
  )  
};

export default ContactCard;