import React, { PureComponent } from 'react'


class About extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            titre:'keep your smile',
            skillValue:'',
            contact:{
                image:'images/avatar.jpg',
                name:'Fatou',
                email:'f.sagna@gmail.com',
                tel: '+221 77 922 16 82'
            },
            skills:[
                { id:1, skill:'UI Design' },
                { id:2, skill:'Softward engeneering' },
                { id:3, skill:'Machines learning' }
            ]  
        }          
    }

    setSkill = (e) => {
        this.setState({
            skillValue:e.target.value
        })
    }

    addSkill = (e) => {
        e.preventDefault();
        let skill={
            id:[ ...this.state.skills ].pop().id + 1,
            skill:this.state.skillValue
        }
        this.setState({
            skills:[ ...this.state.skills,skill ]
        })
    }

    deleteSkill = (skill) => {
        alert("Voulez vous vraiment supprimer");

        let index = this.state.skills.indexOf(skill);
        let copySkills = [ ...this.state.skills ];
        copySkills.splice(index);

        this.setState({
            skills:copySkills
        });

    }


    render() {
        return (
            <div>
                <div className='card m-3'>
                    <div className='card-header'>
                        <strong><label>{ this.state.titre }</label></strong>
                    </div>
                    <div className='card-body'>
                        <div className='row p-2'>
                            <div className='col-auto'>
                                <img width={100} src={this.state.contact.image} alt="femme noir"/>
                            </div>
                            <div className='col'>
                                <ul className='list-group'>
                                    <li className='list-group-item'>{ this.state.contact.name }</li>
                                    <li className='list-group-item'>{ this.state.contact.email }</li>
                                    <li className='list-group-item'>{ this.state.contact.tel }</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
                <div className='card m-3'>
                    <div className='card-header'>
                        <strong><label> Skills </label></strong>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={ this.addSkill } className='mb-2'>
                            <div className='row'>
                                <div className='col'>
                                    <input 
                                        className='form-control' 
                                        type="text" 
                                        name="skill" 
                                        placeholder="skill to add"
                                        value={ this.state.skillValue }
                                        onChange={ this.setSkill }
                                    />
                                </div>
                                <div className='col-auto'>
                                    <button className='btn btn-primary' type='submit'>Add</button>
                                </div>
                            </div>    
                        </form>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>SKILL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.skills.map((s,index)=>
                                    <tr key={index}>
                                        <td> { s.id } </td>
                                        <td> { s.skill } </td>
                                        <td>
                                            <button onClick={() => this.deleteSkill(s) } className='btn-danger m-2'>X</button>
                                        </td>     
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default About;