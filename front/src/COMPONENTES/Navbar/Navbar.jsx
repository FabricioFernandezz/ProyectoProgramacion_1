// import React from 'react'

// export default function Navbar  ()  {
//   return (
//     <div>
//         <nav className="navbar navbar-dark bg-dark">
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <a className="navbar-brand" href="https://www.linkedin.com/feed/">X</a>

// </nav>
//     </div>
//   )
// }
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/login">
          <button className="login">
            <span> Login </span>
          </button>
        </Link>
        
        <Link to="/">
          <button className="login">
            <span> 🏠 </span>
          </button>
        </Link>
      
        <Link to="/register">
          <button className="login">
            <span> Register </span>
          </button>
        </Link>
      </nav>
    </div>
    
  );
}
