import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
import EditContact from './EditContact'
import ContactDetails from './ContactDetails';
import api from '../api/contacts';


function App () {

  //const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const reviewContact = async ()=>{
      const reponse = await api.get("/contacts");
      return reponse.data;
  }

  const addCon = async (contact) => {
    const request = {
      id:uuidv4(),
      ...contact,
    };
    const reponse = await api.post("/contacts", request);
    setContacts([...contacts, reponse.data]);
    //setContacts([...contacts,{id: uuidv4(), ...contact}])
  };
 

  const UpdateContact = async (contact) =>{
    const reponse = await api.put(`/contacts/${contact}`,contact);
    const {id,nom,email} = reponse.data;
    setContacts(
      contacts.map((contact)=>{
        return contact.id ===id ? {...reponse.data} : contact;
      })
    );
  };

  const removeContact = async (id) => {
    await api.delete(`/contacts/${id}`);
      const newContact = contacts.filter((contact)=>{
        return contact.id !== id
      });
      setContacts(newContact)
  };

  useEffect(()=>{
    //MISE A JOUR
    //const result = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //if(result) setContacts(result);
    const getAllContact = async ()=> {
       const getContact = await reviewContact();
       if(getContact) setContacts(getContact);
    };
    getAllContact();
  },[])
 

  //STOCKAGE LOCAL
  //useEffect(()=>{
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  //},[contacts])

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    }
    else{
      setSearchResult(contacts);
    }
  };

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={ 
            <ContactList term={ searchTerm } searchKeyWord={searchHandler}
                  contact={ searchTerm.length < 1 ? contacts : searchResult } 
                  removeContact={ removeContact } />} />
          <Route path="/add" element={ <AddContact newContact={addCon}/> } />
          <Route path="/edit" element={<EditContact newUpdateContact={UpdateContact}/> } />
          <Route path="/:id" element={ <ContactDetails />} /> 
        </Routes> 
      </BrowserRouter> 
    </div>
  );
};

export default App;
