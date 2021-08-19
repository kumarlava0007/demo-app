import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {
    return (
        <div className="container-fluid">
            <div className="row">
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand">Geekster</a>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white">Home</Link>
                        </li>
                    <li className="nav-item">
                        <Link to="/counter" className="nav-link text-white">Counter</Link></li>
                    <li className="nav-item">
                        <Link to="/user" className="nav-link text-white">User</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/post" className="nav-link text-white">Post</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    );
}

export default NavBar;