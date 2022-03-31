import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AddContact extends Component {
    state = {
        nom:"",
        email:""
    }

    addNewContact = (e) => {
        e.preventDefault();
        if(this.state.nom === "" || this.state.email === ""){
            alert("les champs doivent etre renseignes");
            return;
        }
        
        this.props.newContact(this.state);
        this.setState({nom:"",email:""});
        
        //this.props.history.push("/");
    };    

    render() {
        return (
            <div className='ui main'>
                <Link to="/"><button className="ui button blue right floated">voir list</button></Link>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.addNewContact}>
                    <div className='field'>
                        <label>Nom :</label>
                        <input 
                            type="text" 
                            name="nom" 
                            placeholder="Nom"
                            value={this.state.nom}
                            onChange={(e) => this.setState({nom:e.target.value})}
                        />
                    </div>
                    <div className='field'>
                        <label>Email :</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({email:e.target.value})}
                            />
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>

            </div>
        )
    }
}

export default AddContact;