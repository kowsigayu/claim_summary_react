import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="App">
            <form id="login-form">
                <h1>LOGIN</h1>
                <input type="text" placeholder="Employee ID" id="userid" required />
                {/* <p>{errors.useridValid}</p> */}
                <input type="password" placeholder="Password" id="userpass" required />
                {/* <p>{errors.passwordValid}</p> */}
                <Link className="btn btn-primary mr-2" id="signinbutton" to="/viewclaim">Sign In</Link>
            </form>
        </div>
    );
};

export default Login;
