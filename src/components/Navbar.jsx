import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button, Menu, MenuItem } from "@material-ui/core";

const Navbar = () => {
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const updateScrollDistance = () => {
      window.requestAnimationFrame(() => setScrollDistance(window.scrollY));
    };

    // Change navbar color when scrolled past the hero section
    const nav = document.getElementById("navbar");
    nav.classList.toggle("nav-scrolled", scrollDistance > 800);

    window.addEventListener("scroll", updateScrollDistance);
    return () => window.removeEventListener("scroll", updateScrollDistance);
  }, [scrollDistance]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(); // element that the menu is anchored to

  const handleMenuOpen = (e) => {
    setMenuOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => setMenuOpen(false);

  const navLinks = [
    { title: "about", href: "#about" },
    { title: "projects", href: "#projects" },
    { title: "experience", href: "#experience" },
    { title: "contact", href: "#contact" },
    { title: "resume ↓", href: "Joseph_Huntington_Resume_Public.pdf" },
    { title: "blog →", href: "/blog" },
  ];

  return (
    <header id="navbar">
      <a href="#">
        <span className="logo">&lt;Joey /&gt;</span>
      </a>

      {/* Desktop Navbar */}
      <nav>
        <div>
          {navLinks.map((navItem) => (
            <a key={navItem.title} href={navItem.href}>
              {navItem.title}
            </a>
          ))}
        </div>
        <div className="socials">
          <a target="_blank" href="https://github.com/jwhunt19">
            <FontAwesomeIcon className="fa-lg" icon={faGithub} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/josephhuntington/"
          >
            <FontAwesomeIcon className="fa-lg" icon={faLinkedin} />
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <Button
        id="menu-button"
        className="mobile-menu-button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <FontAwesomeIcon className="fa-lg" icon={faBars} />
      </Button>

      <Menu
        className="mobile-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        open={menuOpen}
        onClose={handleMenuClose}
      >
        {navLinks.map((navItem) => (
          <MenuItem key={navItem.title} onClick={handleMenuClose}>
            <a href={navItem.href}>{navItem.title}</a>
          </MenuItem>
        ))}
        <MenuItem onClick={handleMenuClose} className="menu-close">
          Close
        </MenuItem>
      </Menu>
    </header>
  );
};

export default Navbar;
