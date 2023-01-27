import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className="ui raised very padded segment">
            <a href="/" className="ui teal inverted segment">Navbar</a>
            <div className="ui right floated header">
                <button className="ui button"><NavLink to="/">Home</NavLink></button>
                <button className="ui button"><NavLink to="/about">About</NavLink></button>
                <button className="ui button"><NavLink to="/contact">Contact</NavLink></button>
            </div>
        </nav>
    );
}

export default Navbar;