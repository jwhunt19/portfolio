import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Modal, Button, Icon, Menu, MenuItem, MenuButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload, faBars } from '@fortawesome/free-solid-svg-icons'

import BlogPost from '../../components/blogpost.js';

export default function Blog() {

  // TODO - is this scroll distance stuff useless?
  const [scrollDistance, setScrollDistance] = useState(0);
  useEffect(() => {
    const updateScrollDistance = () => {
      setScrollDistance(window.pageYOffset);
    };
  
    const onScroll = () => {
        window.requestAnimationFrame(updateScrollDistance);
    };
  
    window.addEventListener("scroll", onScroll);

    const nav = document.getElementById('navbar');

    nav.classList.toggle("nav-scrolled", scrollDistance > 800);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDistance]);

  const [menu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState();

  const handleMenu = (e) => {
    setMenu(true)
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => setMenu(false);


  return (
    <>
    <Head>
      <title>Blog</title>
    </Head>
    <header id="navbar">
      <a href="/"><span className="logo">&lt;Joey /&gt;</span></a>
      <nav>
        <div>
          <a href="/">← portfolio</a>
          <a href="Joseph_Huntington_Resume_Public.pdf">resume <u>↓</u></a>
        </div>
        <div className="socials">
          <a target="_blank" href="https://github.com/jwhunt19">
            <FontAwesomeIcon className="fa-lg" icon={faGithub} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/josephhuntington/">
            <FontAwesomeIcon className="fa-lg" icon={faLinkedin} />
          </a>
        </div>
      </nav>


      <Button id ="menu-button" className="mobile-menu-button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenu}>
        <FontAwesomeIcon className="fa-lg" icon={faBars} />
      </Button>
      <Menu
        className="mobile-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        open={menu}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}><a href="/">← portfolio</a></MenuItem>
        <MenuItem onClick={handleMenuClose}><a href="Joseph_Huntington_Resume_Public.pdf">resume <u>↓</u></a></MenuItem>
        <MenuItem onClick={handleMenuClose} className="menu-close">Close</MenuItem>
      </Menu>
    </header>

    <div className="hero context">
      <h1>Joey's Code Blog</h1>
      <span>Here I write about things I've learned, things I'm working on, and leetcodes. Mostly leetcodes</span>
    </div>
    <div class="area" >
      <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
      </ul>
    </div >

    <div className='blog'>
      <h2>Blog posts</h2>
      <ul>
        <li>(06/12/2023) Leetcodes #3 - #489 Lorem ipsum dolor sit amet</li>
        <li>(05/31/2023) Code Talk #1 - Javascript Array Methods</li>
        <li>(05/15/2023) Leetcodes #2 - #489 Lorem ipsum dolor sit amet</li>
        <li>(05/02/2023) Interviews #1 - Employee Databases</li>
        <li>(04/24/2023) Leetcodes #1 - #489 Lorem ipsum dolor sit amet</li>
      </ul>
    </div>
    </>
  )
}