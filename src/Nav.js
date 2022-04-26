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
  { name: "Technologies", icon: ["fas", "atom"] },
  { name: "Projects", icon: ["fas", "code"] },
  { name: "Contact", icon: ["fas", "envelope"] }
  
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
          <h4>.devtoti<span>_</span></h4>
          <FontAwesomeIcon onClick={() => setOpen(true)} icon="bars" size="2x" fixedWidth />
        </div>
        <nav>
          <ul>{NavItems(navSection)}</ul>
        </nav>
        <main>
        <Dialog 
          open={open}
          onClose={() => setOpen(false)}>
                <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <FontAwesomeIcon onClick={() => setOpen(false)} icon="times" size="2x" fixedWidth />
              <CloseIcon />
            </IconButton>
          {navSection.map((item, ix) => (
            <div className="nav-panel" key={ix}>
              <Link to={item.name}>
                <li onClick={() => setOpen(false)}>.{item.name}<span>_</span></li>
              </Link>
              <br />
            </div>
          ))}

        </Dialog>
        </main>
      </div>
      <Outlet />
    </>
  );
}
