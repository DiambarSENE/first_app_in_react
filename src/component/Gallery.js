import React, { PureComponent } from 'react';
import axios from 'axios';

class Gallery extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            hits:[],
            sizePage:10,
            currentPage:1,
            currentKew:'paris',
            totalPages:1,
            pages:[]

        }
    }

    componentDidMount(){
        this.getHit();
    }

    getHit(){
        let url="https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q="
              +this.state.currentKew+"&page="+this.state.currentPage+"&per_page="+this.state.sizePage;
        axios.get(url).then((resp)=>{
            let totalPage= ( resp.data.totalHits % this.state.sizePage )
                               ?resp.data.totalHits/this.state.sizePage : 1 + resp.data.totalHits/this.state.sizePage; 
            console.log(resp);
            this.setState({
                hits:resp.data.hits,
                totalPages:totalPage,
                pages: new Array(totalPage).fill(0)
            });
        }).catch((err)=>{
            console.log(err);
        })
    }

    setKeyWord = (event) => {
        this.setState({
            currentKew:event.target.value
        });
    }

    search = (event) => {
        event.preventDefault();
        this.getHit();
    }

    goToPage = (page) => {
        this.setState({
            currentKew:page
        }, ()=>{ 
            this.getHit();
        });
       
    }

    render() {
        return (
            <div>
                <div>
                    <ul className='nav nav-pills'>
                            {
                                this.state.pages.map((v,index)=>
                                    <li key={index}> 
                                        <button className={this.state.currentPage==index+1 ? 'btn btn-primary' : 'btn btn-link'} onClick={()=> this.goToPage(index + 1)}>{ index + 1} </button>
                                    </li>
                                )
                            }
                    </ul>
                </div>


                <form onSubmit={this.search}>
                    <div className='row m-2 p-2'>
                        <div className='col'>
                            <input 
                                className='form-control'    
                                type="text"
                                value={this.state.currentKew}
                                onChange={this.setKeyWord}  
                            />
                        </div>
                        <div className='col-auto'>
                            <button className='btn-primary' type='submit'>Chercher</button>
                        </div>
                    </div>
                </form>


                <div className='row'>
                    {
                        this.state.hits.map((hit,index)=>
                        <div className='row-md-4' key={index}>
                            <div className='card'>
                                <div className='card-header'>{hit.tags} | {hit.webformatWidth} x {hit.webformatHeight} </div>
                                <div className='card-body'>
                                    <img className='card-img' height={200} src={hit.webformatURL} alt="images" />
                                </div>
                            </div>    
                        </div>
                        )
                    }
                    
                </div>
            </div>    
        )
    }
}

export default Gallery;