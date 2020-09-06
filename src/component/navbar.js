import React from 'react';
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <div className="navbar-header">
                    <label className="navbar-brand">Omega Insurance</label>
                    <Link className="navbar-brand" id="home" exact to="/">Home</Link>
                </div>
                <Link className="btn btn-outline-light" exact to="/adduser">Add User</Link>
            </div>
        </nav>
    );
};

export default Navbar;
