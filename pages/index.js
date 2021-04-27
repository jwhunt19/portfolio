import Image from 'next/image';
import Head from 'next/Head';
import React, { useState, useEffect } from 'react';
import { Modal, Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [gohulaOpen, setGohulaOpen] = useState(false);
  const [treehouseOpen, setTreehouseOpen] = useState(false);
  const [galvanizeOpen, setGalvanizeOpen] = useState(false);
  const [pokebuilderOpen, setPokebuilderOpen] = useState(false);

  const handleGohula = () => {
    setGohulaOpen(!gohulaOpen);
  };

  const handleTreehouse = () => {
    setTreehouseOpen(!treehouseOpen);
  };

  const handleGalvanize = () => {
    setGalvanizeOpen(!galvanizeOpen);
  };

  const handlePokebuilder = () => {
    setPokebuilderOpen(!pokebuilderOpen);
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: 'none',
    },

    paper: {
      position: 'absolute',
      maxHeight: '90%',
      maxWidth: '70%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderRadius: '5px',
      outline: 'none',
    },

  }));

  const classes = useStyles();

  
  const [navColor, setNavColor] = useState(false);
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







  return (
    <>
    <Head>
      <title>Joey Huntington Portfolio</title>
    </Head>
    <header id="navbar">
      <a href="#"><span className="logo">&lt;Joey /&gt;</span></a>
      <nav>
        <div>
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
          <a href="Joseph Huntington Resume NP.pdf">resume <FontAwesomeIcon className="fa-xs" icon={faDownload} /></a>
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
    </header>

    {/* Hero */}
    <div className="hero context">
      <h1>JOSEPH &#40;JOEY&#41; <br/>HUNTINGTON</h1>
      <h2>Full Stack Software Engineer</h2>
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

    {/* About */}
    <div id="about" className="about">
      <h3>About</h3>
      <div className="about-wrapper">
        <div className="about-image-wrapper">
          <Image 
            class="about-image" 
            src="/images/me.jpg" 
            layout="fill"
            alt="a photo of me looking very handsome"
            priority
          />
        </div>
        <p>
          Hello! My name is Joseph but you can call me Joey. I am a full stack software engineer
          based in Northern Virginia always looking for the next great opportunity.
          With a background as an Apprentice Electrician and Office Administrator
          I've been involved in problem solving across a wide spectrum, and I love it. My dream has always been
          to work with the latest technology in a way that I can bring my creative ideas to life, and with my 
          love for problem solving, programming was a natural conclusion.
          <br/><br/>
          I studied front end development with the online technology school Treehouse then was selected
          to join the highly selective Hack Reactor Software Engineering Immersive program where I learned
          everything from CS fundamentals to the latest technologies in software engineering. I plan
          to use my creative passions to innovate solutions for this industry.
        </p>
      </div>
    </div>

    {/* Projects */}
    <div id="projects" className="projects">
      <h3>Projects</h3>
      <div className="projects-card">
        <div className="project-image-wrapper">
          <Image
            onClick={handleGohula}
            className="projects-picture clickable"
            src="/images/gohula.png"
            alt="screenshot of etsy mock site"
            layout="fill"
            priority
          />
        </div>
        <Modal
          className={classes.modal}
          open={gohulaOpen}
          onClose={handleGohula}
        >
          <Image
            className={classes.paper, `modal`}
            alt="demo of etsy page mock site"
            src="/images/gohula.gif"
            height={700}
            width={1200}
          />
        </Modal>
        <div className="projects-card-text">
          <h4>GoHuLa</h4>
          <p><b>Tech Stack:</b> MongoDB, Mongoose, Express, React, Node.js, Docker, 
          Bootstrap</p>
          <br></br>
          <p>A full-stack mock-up of an etsy product page made to handle 100 randomly generated and seeded
            primary records stored in a database across various mock sellers and interact with 2 additional
            micro-services created by colleagues via a proxy server
          </p>
          <div className="projects-card-buttons">
            <Button 
              className="projects-card-button" 
              variant="outlined"
              onClick={handleGohula}
            >
              Demo
            </Button>
            <Button 
              className="projects-card-button" 
              variant="outlined"
              target="_blank"
              href="https://github.com/GoHuLa/Product"
            >
              See The Code
            </Button>
          </div>
        </div>
      </div>

      <div className="projects-card">
      <div className="projects-card-text">
          <h4>Billions PG</h4>
          <p><b>Tech Stack:</b> PostgreSQL, Express, React, Node.js, Docker,
           New Relic, K6, Loader.io, EC2, NGINX</p>
          <br></br>
          <p>Optimized and up-scaled a legacy codebase using PostgreSQL to handle over 
            11 million unique records using balancing, indexing and caching. Resulting in being
            able to handle over 2000 requests per second with 0% error rate and average response of
            40-50ms 
          </p>
          <div className="projects-card-buttons">
            <Button 
              className="projects-card-button" 
              variant="outlined"
              target="_blank"
              href="https://github.com/Billions-PG/Reviews"
            >
              See The Code
            </Button>
          </div>
        </div>
        <div className="project-image-wrapper">
          <Image
            className="projects-picture"
            src="/images/reviews.png"
            layout="fill"
            alt="screenshot of etsy mock site"
            priority
          />
        </div>
      </div>

      <div className="projects-card">
        <div className="project-image-wrapper">
          <Image
            onClick={handlePokebuilder}
            className="projects-picture clickable"
            src="/images/pokebuilder.png"
            layout="fill"
            alt="screenshot of pokebuilder"
            priority
          />
        </div>
        <Modal
          className={classes.modal}
          open={pokebuilderOpen}
          onClose={handlePokebuilder}
        >
          <Image
            className={classes.paper, `modal`}
            alt="demo of etsy page mock site"
            src="/images/pokebuilder.gif"
            height={700}
            width={1200}
          />
        </Modal>
        <div className="projects-card-text">
          <h4>PokeBuilder</h4>
          <p><b>Tech Stack:</b> MongoDB, Mongoose, Express, React, Node.js, Docker, 
          Bootstrap</p>
          <br></br>
          <p>A full-stack web app used to build teams of pokemon and see at a glance how well
            they match up to different elemental types and damage types
          </p>
          <div className="projects-card-buttons">
            <Button 
              className="projects-card-button" 
              variant="outlined"
              onClick={handlePokebuilder}
            >
              Demo
            </Button>
            <Button 
              className="projects-card-button" 
              variant="outlined"
              target="_blank"
              href="https://poke-builder.herokuapp.com/"
            >
              Try it out
            </Button>
            <Button 
              className="projects-card-button" 
              variant="outlined"
              target="_blank"
              href="https://github.com/jwhunt19/pokebuilder"
            >
              See The Code
            </Button>
          </div>
        </div>
      </div>
    </div>

        {/* Experience */}
        <div id="experience" className="experience">
      <h3>Experience</h3>
      <div className="experience-wrapper">
        <div className="experience-card">
          <div className="experience-image-wrapper">
            <Image
              onClick={handleTreehouse}
              className="experience-cert"
              src="/images/treehouse-cert.png"
              layout="fill"
              alt="galvanize and hack reactor certificate"
              priority
            />
          </div>
          <Modal
            className={classes.modal}
            open={treehouseOpen}
            onClose={handleTreehouse}
          >
            <Image
              className={classes.paper, `modal`}
              alt="randomly generated"
              src="/images/treehouse-cert.png"
              height={720}
              width={864}
            />
          </Modal>
          <h4>Treehouse</h4>
          <p>Front End Web Development Techdegree</p>
        </div>
        <div className="experience-card">
          <div className="experience-image-wrapper">
            <Image
              onClick={handleGalvanize}
              className="experience-cert"
              src="/images/galvanize-cert.png"
              layout="fill"
              alt="galvanize and hack reactor certificate"
              priority
            />
          </div>
          <Modal
            className={classes.modal}
            open={galvanizeOpen}
            onClose={handleGalvanize}
          >
            <Image
              className={classes.paper, `modal`}
              alt="randomly generated"
              src="/images/galvanize-cert.png"
              height={720}
              width={864}
            />
          </Modal>
          <h4>Hack Reactor | Galvanize</h4>
          <p>Advanced Software Engineering Immersive</p>
        </div>
      </div>
    </div>

    {/* Contact */}
    <div id="contact">
      <h3>Contact</h3>
      <div className="contact-wrapper">
        <form
          action="https://formspree.io/f/xrgrbzoe"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="_replyto" placeholder="Your Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message" />
          <Button  className="contact-submit" variant="outlined" type="submit" endIcon={<Icon>send</Icon>}>Send</Button>
        </form>
        <div className="contact-info">
          <p className="contact-info-text">
            Whether you want to talk about opportunities, collaboration, advice or just chat,
            please do not hesitate to fill out the form here or shoot me an email directly at jwhunt19@gmail.com
          </p>
          <div className="contact-socials">
            <a target="_blank" href="https://github.com/jwhunt19">
              <FontAwesomeIcon className="fa-2x" icon={faGithub} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/josephhuntington/">
              <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
            </a>
            <a target="_blank" href="https://twitter.com/jwhunt19">
              <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
            </a>
            <a href="mailto:jwhunt19@gmail.com">
              <FontAwesomeIcon className="fa-2x" icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
