import React, { useState } from 'react';
import login from '../../images/login.jpg'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';



const Login = () => {
    const { googleSignInHandler, emailPasswordLoginHangler, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const myHistory = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleLogin = () => {

        googleSignInHandler()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                myHistory.push(redirect_uri);

            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }

    const emailChangeHandler = (event) => {
        const emailTxt = event.target.value;
        setEmail(emailTxt);

    }
    const passwordChangeHandler = (event) => {
        const passwordTxt = event.target.value;
        setPassword(passwordTxt);
    }

    const loginHandler = (event) => {

        event.preventDefault();
        emailPasswordLoginHangler(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                myHistory.push(redirect_uri);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    return (
        <div>
            <div className='py-3 container '>

                <div className="row p-3 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
                        <img className='img-fluid' src={login} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start ps-5 ">
                        <h1 className='pb-3'>Login</h1>
                        <form onSubmit={loginHandler}>
                            <div className="mb-3">
                                <i className="fas fa-at pe-2 text-danger"></i>
                                <input onBlur={emailChangeHandler} type="email" className=" input-style" id="exampleInputEmail1" placeholder="Enter your email" />

                            </div>
                            <div className="mb-3">
                                <i className="fas fa-key pe-2 text-danger"></i>
                                <input onBlur={passwordChangeHandler} type="password" className=" input-style" id="exampleInputPassword1" placeholder="Enter your password" />
                            </div>
                            <input type="submit" value="Submit" className="btn btn-outline-danger" />

                            <p className="pt-3">New User? <Link to="/register">Please register here</Link></p>



                        </form>
                        <hr className="w-25" /><span></span>
                        <button className="btn btn-danger" onClick={handleGoogleLogin}> Login with Google</button>
                        <hr className="w-25" />

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Login;