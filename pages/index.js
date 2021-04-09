import Image from 'next/image'
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


export default function Home() {
  const [gohulaOpen, setGohulaOpen] = useState(false);
  const [treehouseOpen, setTreehouseOpen] = useState(false);
  const [galvanizeOpen, setGalvanizeOpen] = useState(false);

  const handleGohula = () => {
    setGohulaOpen(!gohulaOpen);
  };

  const handleTreehouse = () => {
    setTreehouseOpen(!treehouseOpen);
  };

  const handleGalvanize = () => {
    setGalvanizeOpen(!galvanizeOpen);
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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

  return (
    <>
    <header>
      <span className="logo">&lt;Joey /&gt;</span>
      <nav>
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </nav>
      <div className="socials">
        <a href="https://github.com/jwhunt19">
          <i className="fab fa-github"></i>
        </a>
        <a href=""></a>
        <a href=""></a>
      </div>
    </header>

    {/* Hero */}
    <div className="hero">
      <h1>JOSEPH &#40;JOEY&#41; <br/>HUNTINGTON</h1>
      <h2>Full Stack Software Engineer</h2>
    </div>

    {/* About */}
    <div className="about">
      <h3>About</h3>
      <div className="about-wrapper">
        <Image 
          class="about-image" 
          src="/images/me.jpg" 
          height={390}
          width={390}
          alt="a photo of me looking very handsome"
        />
        <p>
          A full-stack software engineer who started as a front-end developer. I completed a
          front-end tech degree with a focus on mobile-first development and responsive design
          from the online technology school Treehouse.<br/><br/>

          I decided to move into full-stack development to open more opportunities, learn a vast
          pool of technologies, and work in a more diverse environment where I can exercise my
          problem-solving skills. I graduated from Hack Reactor's Advanced Software Engineering
          Immersive with a focus on the PERN/MERN stack and continue to learn new technologies every day.
        </p>
      </div>
    </div>

    {/* Experience */}
    <div className="experience">
      <h3>Experience</h3>
      <div className="experience-wrapper">
        <div className="experience-card">
          <Image
            onClick={handleTreehouse}
            className="experience-cert"
            src="/images/treehouse-cert.png"
            height={400}
            width={480}
            alt="galvanize and hack reactor certificate"
          />
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
          <Image
            onClick={handleGalvanize}
            className="experience-cert"
            src="/images/galvanize-cert.png"
            height={400}
            width={480}
            alt="galvanize and hack reactor certificate"
          />
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

    {/* Projects */}
    <div className="projects">
      <h3>Projects</h3>
      <div className="projects-card">
      <Image
          onClick={handleGohula}
          className="projects-picture"
          src="/images/gohula.gif"
          height={280}
          width={480}
          alt="galvanize and hack reactor certificate"
        />
        <Modal
          className={classes.modal}
          open={gohulaOpen}
          onClose={handleGohula}
        >
          <Image
            className={classes.paper, `modal`}
            alt="randomly generated"
            src="/images/gohula.gif"
            height={700}
            width={1200}
          />
        </Modal>
        <div className="projects-card-text">
          <h4>GoHuLa</h4>
          <p><b><b></b>Tech Stack:</b> MongoDB, Mongoose, Express, React, Node.js, Axios, Docker, 
          Bootstrap, Material-UI, React Testing Library, Jest, Supertest</p>
          <br></br>
          <p>A mock up</p>
        </div>
      </div>
    </div>
    </>
  )
}
