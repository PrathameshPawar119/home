import React, { Component } from 'react'

import menu1 from '../images/menu.png'
import menu2 from '../images/menu (1).png'
import search from '../images/loupe.png'
import businessIcon from '../images/bars.png'
import entertainIcon from '../images/video.png'
import healthIcon from '../images/healthcare.png'
import scienceIcon from '../images/atom.png'
import sportsIcon from '../images/dumbbell.png'
import techIcon from '../images/data-management.png'
import userIcon from '../images/user.png'
import signOut from '../images/sign-out.png'


export default function Navbar(){


   const makeActive = ()=>{
    document.querySelector('.sidebar').classList.toggle("active");
  }




    return (
      <div className="NavContainer">
        <div className="sidebar">
          <div className="logo_content">
            <div className="logo">WhatsappIndia</div>
            <img src={menu1} alt="Menu" onClick={makeActive} className="menuImg icon toggle" />
          </div>
          <ul className="nav_list">
            <li className="searchElem">
              <img src={search}  alt="Search" onClick={makeActive} className=" searchIcon icon" />
              <input type="text" placeholder=" Search..." />
              <span className="tooltip searchTooltip">Search</span>
            </li>
            <div className="temp"></div>
            <li>
              <a href="#" id='business' >
                <img src={businessIcon} alt="Business" className="icon" />
                <span className="links_name">Business</span>
              </a>
              <span className="tooltip">Business</span>
            </li>
            <li>
              <a href="#" id='entertainment'>
                <img
                  src={entertainIcon}
                  alt="EntertTainment"
                  className="icon"
                />
                <span className="links_name">Entertainment</span>
              </a>
              <span className="tooltip">Entertainment</span>
            </li>
            <li>
              <a href="#" id='health'>
                <img src={healthIcon} alt="Health" className="icon" />
                <span className="links_name">Health</span>
              </a>
              <span className="tooltip">Health</span>
            </li>
            <li>
              <a href="#" id='science'>
                <img src={scienceIcon} alt="Science" className="icon" />
                <span className="links_name">Science</span>
              </a>
              <span className="tooltip">Science</span>
            </li>
            <li>
              <a href="#" id='sports'>
                <img src={sportsIcon} alt="Sports" className="icon" />
                <span className="links_name">Sports</span>
              </a>
              <span className="tooltip">Sports</span>
            </li>
            <li>
              <a href="#" id='technology'>
                <img src={techIcon} alt="Technology" className="icon" />
                <span className="links_name">Technology</span>
              </a>
              <span className="tooltip">Technology</span>
            </li>
          </ul>
          <div className="profile_content">
            <div className="profile">
              <img src={userIcon} className="icon userIcon" alt="" />
              <div className="userName">Prathamesh P</div>
            </div>
            <div className="logOutSectionElement">
              <img src={signOut} alt="Log Out" className="icon logoutIcon" />
              {/* <span className="tooltip logOutTooltip">DashBoard</span> */}
            </div>
          </div>
        </div>
      </div>
    );
  
}



// business entertainment health science sports technology