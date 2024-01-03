import Image from "next/image";
import { Modal, Button } from "@material-ui/core";

const Project = ({ project, openModalId, openModal, closeModal, classes }) => {
  return (
    <div className="projects-card">
      <div className="project-image-wrapper">
        <Image
          onClick={() => openModal(project.name)}
          className="projects-picture clickable"
          src={project.imageUrl}
          alt={`screenshot of ${project.name} project`}
          layout="fill"
          priority
        />
      </div>
      <Modal
        className={classes.modal}
        open={openModalId === project.name}
        onClose={closeModal}
      >
        <Image
          className={(classes.paper, `modal`)}
          alt={
            project.links.demo.url
              ? `demo of ${project.name} project`
              : `screenshot of ${project.name} project`
          }
          src={
            project.links.demo.url ? project.links.demo.url : project.imageUrl
          }
          height={project.links.demo.height ? project.links.demo.height : 750}
          width={project.links.demo.width ? project.links.demo.width : 1350}
        />
      </Modal>
      <div className="projects-card-text">
        <h4>{project.name}</h4>
        <p>
          <b>Tech Stack:</b> {project.technologies}
        </p>
        <br></br>
        <p>{project.description}</p>
        <div className="projects-card-buttons">
          {!!project.links.demo.url && (
            <Button
              className="projects-card-button"
              variant="outlined"
              onClick={() => openModal(project.name)}
            >
              Demo
            </Button>
          )}
          {!!project.links.github && (
            <Button
              className="projects-card-button"
              variant="outlined"
              target="_blank"
              href={project.links.github}
            >
              See The Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
