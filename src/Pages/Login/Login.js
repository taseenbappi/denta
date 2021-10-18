import React from 'react';
import login from '../../images/login.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';


const Login = () => {
    const { googleSignInHandler } = useAuth();
    return (
        <div>
            <div className='py-3 container '>

                <div className="row p-3 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
                        <img className='img-fluid' src={login} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start ps-5 ">
                        <h1 className='pb-3'>Login</h1>
                        <form>
                            <div className="mb-3">
                                <i className="fas fa-at pe-2 text-danger"></i>
                                <input type="email" className=" input-style" id="exampleInputEmail1" placeholder="Enter your email" />

                            </div>
                            <div className="mb-3">
                                <i className="fas fa-key pe-2 text-danger"></i>
                                <input type="password" className=" input-style" id="exampleInputPassword1" placeholder="Enter your password" />
                            </div>
                            <input type="submit" value="Submit" className="btn btn-outline-danger" />

                            <p className="pt-3">New User? <Link to="/register">Please register here</Link></p>



                        </form>
                        <hr className="w-25" /><span></span>
                        <button className="btn btn-danger" onClick={googleSignInHandler}> Login with Google</button>
                        <hr className="w-25" />

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Login;