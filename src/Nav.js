import React, { useState, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";
import "./styles.css";



const navSection = [
  { name: "Education", icon: ["fas", "graduation-cap"] },
  { name: "Languages", icon: ["fas", "globe-americas"] },
  { name: "Projects", icon: ["fas", "code"] },
  { name: "Contact", icon: ["fas", "envelope"] }
  // { name: "Technologies", icon: ["fas", "atom"] },

];

const hamburger = {
  name: "Hamburger", icon: ["fas", "bars"]
}


function NavItems(arr, icons) {
  return arr.map((item, ix) => (
    <div className="nav-icon" key={ix}>
      <Link to={item.name}>
        <FontAwesomeIcon icon={item.icon} size="2x" fixedWidth />
        <li>{item.name}</li>
      </Link>
      <br />
    </div>
  ));
}


export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className="my-navbar w3-sidebar w3-bar-block w3-black"
        style={{
          width: "15vh"
        }}
      >
        <div className="hamburger">
          <h4 onClick={event => window.location.href = '/'}>.devtoti<span>_</span></h4>
          <FontAwesomeIcon onClick={() => setOpen(true)} icon="bars" size="2x" fixedWidth />
        </div>
        <nav>
          <ul>{NavItems(navSection)}</ul>
        </nav>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}>

          <FontAwesomeIcon onClick={() => setOpen(false)} icon="times" size="2x" fixedWidth />

          {navSection.map((item, ix) => (
            <div className="nav-panel" key={ix}>
              <Link to={item.name}>
                <li onClick={() => setOpen(false)}>.{item.name}<span>_</span></li>
              </Link>
              <br />
            </div>
          ))}

        </Dialog>
      </div>
      {!open && <main className='main-page'>
        <h1 className="welcome-txt">
          Welcome to my page,</h1>
          <h1>my name is Antonio.</h1>
          <div class="triangle">
        <svg id="triangle" viewBox="0 0 100 100">
            	<polygon points="50 15, 100 100, 0 100"/>
        </svg>
     </div> 
        <h2>Looking for a front-end developer?</h2>


        <h3>You have come to the right place</h3>
        
        <button type="button" className="welcome-btn" onClick={() => setOpen(true)}>ENTER</button>
      </main>}
      <Outlet />
    </>
  );
}
