import Head from "next/head";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import projectsData from "../public/data/projects.json";
import certificationData from "../public/data/certificates.json";
import Navbar from "../src/components/Navbar.jsx";
import Hero from "../src/components/Hero.jsx";
import About from "../src/components/About.jsx";
import ProjectList from "../src/components/ProjectList.jsx";
import Experience from "../src/components/Experience.jsx";
import Contact from "../src/components/Contact.jsx";

export default function Home() {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (projectId) => setOpenModalId(projectId);
  const closeModal = () => setOpenModalId(null);

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
      <ProjectList
        projects={projectsData}
        classes={classes}
        openModalId={openModalId}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Experience
        certs={certificationData}
        classes={classes}
        openModalId={openModalId}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Contact />
    </>
  );
}
