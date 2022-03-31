import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';

class EditContact extends PureComponent {
    constructor(props){
        super(props)
       // const {id,nom,email} = props.location.state.contacts;
        this.state={
            nom:"",
            email:""
        }
    }
   
    update = (e) => {
        e.preventDefault();
        if(this.state.nom === "" || this.state.email === ""){
            alert("les champs doivent etre renseignes");
            return;
        }
        this.props.newUpdateContact(this.state);
        this.setState({nom:"",email:""});
        //this.props.history.push("/");
    };    

    render() {
        return (
            <div className='ui main'>
                <Link to="/"><button className="ui button blue right floated">voir list</button></Link>
                <h2>Edit Contact</h2>
                <form className='ui form' onSubmit={this.update}>
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
                    <button className='ui button blue'>Update</button>
                </form>

            </div>
        )
    }
}

export default EditContact;