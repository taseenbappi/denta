import React from 'react';
import { Link } from 'react-router-dom';
import register from '../../images/login.jpg'

const Register = () => {
    return (
        <div>
            <div className='py-3 container '>

                <div className="row p-3 justify-content-center align-items-center">

                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start ps-5 ">
                        <h1 className='pb-3'>Register</h1>
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
                        </form>
                        <hr className="w-25" /><span></span>
                        <button className="btn btn-danger" > Register with Google</button>
                        <hr className="w-25" />
                        <p>Already register? <Link to="/login">Login here</Link> </p>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
                        <img className='img-fluid' src={register} alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Register;