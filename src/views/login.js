import React from 'react';
import { Context } from "./../store/appContext"
import Navbar from './../components/Navbar'


const Login = props => {
    const { store, actions } = useContext(Context);
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center mt-5">
                    <Navbar/>
                </div>    
            </div>
                <div className="row">
                    <div className="col-md-4"> </div>
                    <div className="col-md-4">
                        <div className="card mt-2">
                            <div className="card-header">
                                Login
                    </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="username" className="form-label text-muted">Username:</label>
                                    <input type="text" id="username" name="username" className="form-control"></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password" className="form-label text-muted">Password:</label>
                                    <input type="password" id="password" name="password" className="form-control"></input>

                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block">Login</button>
                            </div>
                            <div className="d-flex justify-content-center pt-1">
                                <small className="form-text text-muted">Powered by Sensetime MR</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )    
                }
                        
export default Login;