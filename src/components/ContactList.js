import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';


const  ContactList = (props) =>  {

    const inputEl = useRef("");

    const removeContac = (id) => {
        props.removeContact(id);
    };
  
   const result = props.contact.map((contact) => {
       return <ContactCard contacts={contact} newContactList={removeContac} key={contact.id} />
   });

   const getSearchTerm = () => {
        props.searchKeyWord(inputEl.current.value);
   };

    return (
        <div className='ui main'>
            <Link to="/add"><button className="ui button blue right floated">Add contact</button></Link>
            <h2>contact list</h2>
            <div className='ui search'>
                <div className='ui icon input'>
                    <input ref= { inputEl } type="text" placeholder="Search contact" className='prompt'
                        value={props.term}
                        onChange={getSearchTerm}/>
                    <i className='ui search icon'/>
                </div>
            </div>
            <div className='ui celled list'>
                { result.length > 0 ? result : "Aucun contact trouve" } 
            </div> 
        </div>      
    )  
};

export default ContactList;