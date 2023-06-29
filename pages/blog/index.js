import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button, Icon, Menu, MenuItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { getSortedPosts } from "../../lib/posts";
import styles from './blog.module.css';

export async function getStaticProps() {
  const posts = getSortedPosts()
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({posts}) {
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

    const nav = document.getElementById("navbar");

    nav.classList.toggle("nav-scrolled", scrollDistance > 800);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDistance]);

  const [menu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState();

  const handleMenu = (e) => {
    setMenu(true);
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => setMenu(false);

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <header id="navbar" className={styles.nav}>
        <a href="/">
          <span className="logo">&lt;Joey /&gt;</span>
        </a>
        <nav>
          <div>
            <a href="/">← portfolio</a>
            <a href="Joseph_Huntington_Resume_Public.pdf">
              resume <u>↓</u>
            </a>
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

        <Button
          id="menu-button"
          className="mobile-menu-button"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleMenu}
        >
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
          <MenuItem onClick={handleMenuClose}>
            <a href="/">← portfolio</a>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="Joseph_Huntington_Resume_Public.pdf">
              resume <u>↓</u>
            </a>
          </MenuItem>
          <MenuItem onClick={handleMenuClose} className="menu-close">
            Close
          </MenuItem>
        </Menu>
      </header>

      <div className="blog">
        <h2>Blog posts</h2>
        {posts.map((post) => (
          <div key={post.id} className={styles.excerpt}>
            <div className={styles.title}>
              <Link href={`/blog/${post.id}/`}>{post.title}</Link>
            </div>
            <div className={styles.date}>{post.date}</div>
            <p>{post.description}</p>
            <br />
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
