import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Login Please</h1>
            <button className="btn btn-warning">Google Login</button>
            <p>New User? <Link to="/register">Please register here</Link></p>
        </div>
    );
};

export default Login;