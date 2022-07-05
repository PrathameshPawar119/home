import React from "react";

const logo = require('./logo.png');

export default function About(props){

  let mystyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#1e1d1e" : "white",
  };

  let BtnStyle = {
    backgroundColor: props.mode === "dark" ? "#4b0360" : "blue",
  };
    return(
      <div className="container" id="CardsGroup">
        <div className="card" style={{width: '18rem'}}>
          <img src={logo} className="card-img-top" style={mystyle} alt="..."/>
          <div className="card-body" style={mystyle}>
            <h5 className="card-title">Attainment Project</h5>
            <p className="card-text">My 2nd year college project (under guidance of dr. A.P. Pande sir)</p>
            <a href="http://attainment-system-mumbai-university.epizy.com/elements/login.php" target={'_blank'} style={BtnStyle} className="btn btn-primary">Go to Project</a>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <img src={logo} className="card-img-top" style={mystyle} alt="..."/>
          <div className="card-body" style={mystyle}>
            <h5 className="card-title">M-Focus</h5>
            <p className="card-text">My Fully Responcive Javascript Project (An Indian Devotional and Motivational music site)</p>
            <a href="https://mfocus.000webhostapp.com/" target={'_blank'}  style={BtnStyle} className="btn btn-primary">Listen to your Inner Voice</a>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <img src={logo} className="card-img-top" style={mystyle} alt="..."/>
          <div className="card-body" style={mystyle}>
            <h5 className="card-title">IndiaToday</h5>
            <p className="card-text">My Upcoming React js and Javascript Based Project (An fully functional news website)</p>
            <a href="/" target={'_blank'} className="btn btn-primary" style={BtnStyle}>Comming Soon</a>
          </div>
        </div>
      </div>
        
    )
}