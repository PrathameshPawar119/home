import React from "react";
import {Link} from "react-router-dom";

export default  function Navbar(props){

    
    return (
      <div> 
        <nav className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode}`}>
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              <strong>{props.title}</strong>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={props.tab1Link}>
                    {props.tab1}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={props.tab2Link}>
                    {props.tab2}
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex mx-2" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
              <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{props.mode} Mode</label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}

// Navbar.PropTypes  = {
//   title : PropTypes.string.isRequired,
//   tab1: PropTypes.string,
//   tab2: PropTypes.string
// }.

Navbar.defaultProps = {
  title : 'Title Here',
  tab1 : 'Tab1 here',
  tab2 : 'Tab2 here'
}