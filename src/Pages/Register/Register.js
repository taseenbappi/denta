import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import register from '../../images/login.jpg';
import useAuth from '../../Hooks/useAuth';

const Register = () => {

    const { registerHangler, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const nameChangeHandler = (event) => {
        const nameTxt = event.target.value;
        setName(nameTxt);


    }

    const emailChangeHandler = (event) => {
        const emailTxt = event.target.value;
        setEmail(emailTxt);

    }

    const passwordChangeHandler = (event) => {
        const passwordTxt = event.target.value;
        var numValidExp = /(?=.*[0-9])/;
        if (!numValidExp.test(passwordTxt)) {
            setError("At least enter one number")
        }
        if (passwordTxt.length < 6) {
            setError("Password must be in 6 character");
        }

        setPassword(passwordTxt);
    }
    // email and password register handler
    const registrationHandler = (event) => {
        event.preventDefault();
        registerHangler(email, password, name);
        setUser({});

    }

    return (
        <div>
            <div className='py-3 container '>

                <div className="row p-3 justify-content-center align-items-center">

                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start ps-5 ">
                        <h1 className='pb-3'>Register</h1>
                        <form onSubmit={registrationHandler}>
                            <div className="mb-3">
                                <i className="fas fa-user-edit pe-2 text-danger"></i>
                                <input onBlur={nameChangeHandler} type="text" className=" input-style" id="name" placeholder="Enter your name" required />

                            </div>
                            <div className="mb-3">
                                <i className="fas fa-at pe-2 text-danger"></i>
                                <input onBlur={emailChangeHandler} type="email" className=" input-style" id="email" placeholder="Enter your email" required />

                            </div>
                            <div className="mb-3">
                                <i className="fas fa-key pe-2 text-danger"></i>
                                <input onBlur={passwordChangeHandler} type="password" className=" input-style" id="password" placeholder="Enter your password" required />
                                <p className="text-danger fw-bolder">{error}</p>
                            </div>
                            <input type="submit" value="Submit" className="btn btn-outline-danger" />
                        </form>
                        <hr className="w-25" /><span></span>
                        <p>Already register? <Link to="/login">Login here</Link> </p>
                        <hr className="w-25" />


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