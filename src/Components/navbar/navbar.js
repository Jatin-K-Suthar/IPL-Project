import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./navbar.module.css";

function Navbar() {
    return (
            <nav className={classes.navBarContainer}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/teams">Teams</Link></li>
                    <li><Link to="/players">Players</Link></li>
                    <li><Link to="/create-team">Create Team</Link></li>
                    <li><Link to="/create-player">Create Player</Link></li>
                </ul>
            </nav>
    );
}

export default Navbar;
