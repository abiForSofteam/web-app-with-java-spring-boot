import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link style={{color:"#533d3d"}} className="navbar-brand" to="/">
         <h1 style={{fontSize:15, fontWeight:"bold", fontFamily:"Montserrat"}}>Aliyou BINATE</h1> 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link style={{fontSize:14, fontWeight:"bold", fontFamily:"Montserrat"}} to={"/informations-techniques"}>
                Informations Techniques
              </Link>
            </li>
            <li className="nav-item">
              <Link style={{fontSize:14, fontWeight:"bold", fontFamily:"Montserrat"}} to={"/certifications"}>
                Certifications
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

export default Header;
