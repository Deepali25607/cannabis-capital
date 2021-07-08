import React from 'react'
import logo from './images/logo.png';
import 'reactjs-popup/dist/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
function CannabiscapitalHeader (){
    
        return (
            <div>
                <header className="main_nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="home"><img src={logo} alt="logo" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="Cannabiscapitalintertainment">Entertainment <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="CannabiscapitalNews">News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="CannabiscapitalNetwork">Network</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="Cannabiscapitalcompound">Creative Compound</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!" data-toggle="modal" data-target="#loginForm">Login</a>
                                    </li>
                                    <li className="nav-item sign_upNav">
                                        <a className="nav-link" href="signup" data-toggle="modal" data-target="#signupForm">Sign Up</a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>

                </header>






               
                <Login />
                
                <Signup />
               
            </div>
        )
    }


export default CannabiscapitalHeader;

