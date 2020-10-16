import React from 'react';
import { Link } from "react-router-dom";


function Menu() {
  return (
    
   
        <div className="menu">
            <ul>
                
                <li><Link className="skip-link" to='#main'>Skip to content</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="https://google.com">Google</Link></li>
            </ul>
        </div>

  );
}

export default Menu;
