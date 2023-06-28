import Head from 'next/head'
import styles from './layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Button, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Layout({ children, home }) {
  const [menu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState();

  const handleMenu = (e) => {
    setMenu(true)
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => setMenu(false);

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Joey Huntington's Blog</title>
      </Head>
      <header id="navbar" className={styles.nav}>
        <a href="/"><span className="logo">&lt;Joey /&gt;</span></a>
        <nav>
          <div>
            <a href="/blog">← back to blog</a>
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
          <MenuItem onClick={handleMenuClose}><a href="Joseph_Huntington_Resume_Public.pdf">resume <u>↓</u></a></MenuItem>
          <MenuItem onClick={handleMenuClose}><a href="/blog">← back to blog</a></MenuItem>
          <MenuItem onClick={handleMenuClose} className="menu-close">Close</MenuItem>
        </Menu>
      </header>
    <div className={styles.container}>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
    </div>
  )
}