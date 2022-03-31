import React, { PureComponent } from 'react';


class Counter extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
          counter : 1,
          list : [0]
        }

    }
  
    addImage = (op) => {
        let signe =  op === "+" ?  1 : -1;

        if(op === "-" && this.state.counter === 1) 
            signe = 0;

        let c = this.state.counter + signe;
       
        this.setState({
           counter : c,
           list : new Array(c).fill(0)
       });
    }
    

    render() {
        return (
            <div className="card m-3">
                <div className="card-header">
                    <strong>{this.props.title} : {this.state.counter}</strong>
                </div>
                <div>
                    <button onClick={()=>this.addImage('+')} className='btn btn-primary m-2'>+</button>
                    <button onClick={()=>this.addImage('-')} className='btn btn-primary m-2'>-</button>
                </div>
                <div className="card-body auto">
                    {
                        this.state.list.map((v,index)=>
                            <span  key={index}>
                                <img src={this.props.image} width={100} alt="femme noir"/>
                            </span>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Counter;