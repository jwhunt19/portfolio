import { useState } from "react";
import Project from "./Project";

const ProjectList = ({ projects, classes, openModalId, openModal, closeModal }) => {

  return (
    <div id="projects" className="projects">
      <h3>Projects</h3>
      {projects.map((project) => (
        <Project
          key={project.name}
          project={project}
          openModalId={openModalId}
          openModal={openModal}
          closeModal={closeModal}
          classes={classes}
        />
      ))}
    </div>
  );
};

export default ProjectList;
