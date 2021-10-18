import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Register Please</h1>
            <p>Already register? <Link to="/login">Login here</Link> </p>
        </div>
    );
};

export default Register;