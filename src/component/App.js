import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, BrowserRouter, Route, Link  } from 'react-router-dom';
import About from './About';
import Counter from './Counter';
import Gallery from './Gallery';
import Home from './Home';

function App() {
    return (
        <BrowserRouter>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="counter">Counter</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/gallery">Gallery</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           <br/><br/><br/>
            <div className='container'>
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/counter"  element={ <Counter title="Profil" image="images/femme.jpg"/>} />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/gallery" element={ <Gallery /> } />
                </Routes>
            </div>    
            
        </BrowserRouter> 
    )
    
}

export default App;