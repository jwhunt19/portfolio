import Image from "next/image";
import { Modal } from "@material-ui/core";

const Cert = ({ cert, classes, openModalId, openModal, closeModal }) => {
  return (
    <div className="experience-card">
      <div className="experience-image-wrapper">
        <Image
          onClick={() => openModal(cert.name)}
          className="experience-cert"
          src={cert.image.url}
          layout="fill"
          alt={`image of ${cert.name} certificate`}
          priority
        />
      </div>
      <Modal
        className={classes.modal}
        open={openModalId === cert.name}
        onClose={closeModal}
      >
        <Image
          className={(classes.paper, `modal`)}
          alt={`image of ${cert.name} certificate`}
          src={cert.image.url}
          height={cert.image.height}
          width={cert.image.width}
        />
      </Modal>
      <h4>{cert.name}</h4>
      <p>{cert.description}</p>
    </div>
  );
};

export default Cert;
