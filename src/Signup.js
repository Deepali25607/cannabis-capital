import React from 'react'
import signupbg from './images/signup-bg.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 function Signup () {
    
        return (
            <div>
                 <div className="modal modalOne fade" id="signupForm" tabindex="-1" role="dialog" aria-labelledby="signupFormTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="login_Sign">
                                    <div className="loginSign_left">
                                        <div className="loginSign_thumb">
                                            <img src={signupbg} alt="Sign Up" />
                                        </div>
                                    </div>
                                    <div className="loginSign_right">
                                        <div className="loginSign_wraper">
                                            <h2 className="font50 sec_title">Welcome to Cannabis Capitol</h2>
                                            <h3>Create your account</h3>
                                            <form action="" className="form_logSign">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Name</label>
                                                    <input type="text" className="form-control" placeholder="" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Email</label>
                                                    <input type="email" className="form-control" placeholder="" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control" placeholder="" />
                                                </div>
                                                <button type="submit" className="btn form_logSignSubmit">Sign Up</button>
                                            </form>
                                            <h5>Already have an account? <button type="button" className="close" data-dismiss="modal"
                                                data-toggle="modal" data-target="#loginForm">
                                                Login Here
                                    </button> </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Signup;

