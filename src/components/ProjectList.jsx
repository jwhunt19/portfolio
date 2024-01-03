import { useState } from "react";
import Project from "./Project";

const ProjectList = ({ projects, classes }) => {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (projectId) => setOpenModalId(projectId);
  const closeModal = () => setOpenModalId(null);

  return (
    <div id="projects" className="projects">
      <h3>Projects</h3>
      {projects.map((project) => (
        <Project
          key={project.id}
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
