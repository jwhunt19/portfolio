import Cert from "./Cert";

const Experience = ({ certs, classes, openModalId, openModal, closeModal }) => {
  return (
    <div id="experience" className="experience">
      <h3>Experience</h3>
      <div className="experience-wrapper">
        {certs.map((cert) => (
          <Cert
            key={cert.name}
            cert={cert}
            openModalId={openModalId}
            openModal={openModal}
            closeModal={closeModal}
            classes={classes}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
