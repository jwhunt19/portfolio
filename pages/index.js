import Image from "next/image";
import Head from "next/head";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import projectsData from "../public/data/projects.json";
import Navbar from "../src/components/Navbar.jsx";
import Hero from "../src/components/Hero.jsx";
import About from "../src/components/About.jsx";
import ProjectList from "../src/components/ProjectList.jsx";

export default function Home() {
  const [gohulaOpen, setGohulaOpen] = useState(false);
  const [treehouseOpen, setTreehouseOpen] = useState(false);
  const [galvanizeOpen, setGalvanizeOpen] = useState(false);
  const [pokebuilderOpen, setPokebuilderOpen] = useState(false);
  const [csvExporterOpen, setCSVExporterOpen] = useState(false);

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

  const handleCSVExporter = () => {
    setCSVExporterOpen(!csvExporterOpen);
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
    },

    paper: {
      position: "absolute",
      maxHeight: "90%",
      maxWidth: "70%",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderRadius: "5px",
      outline: "none",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Joey Huntington Portfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <ProjectList projects={projectsData} classes={classes} />

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
                className={(classes.paper, `modal`)}
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
                className={(classes.paper, `modal`)}
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
          <form action="https://formspree.io/f/xrgrbzoe" method="POST">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="_replyto" placeholder="Your Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message" />
            <Button
              className="contact-submit"
              variant="outlined"
              type="submit"
              endIcon={<Icon>send</Icon>}
            >
              Send
            </Button>
          </form>
          <div className="contact-info">
            <p className="contact-info-text">
              Whether you want to talk about opportunities, collaboration,
              advice or just chat, please do not hesitate to fill out the form
              here or shoot me an email directly at jwhunt19@gmail.com
            </p>
            <div className="contact-socials">
              <a target="_blank" href="https://github.com/jwhunt19">
                <FontAwesomeIcon className="fa-2x" icon={faGithub} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/josephhuntington/"
              >
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
  );
}
