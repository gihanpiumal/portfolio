import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Modal } from "antd";
import DetailModal from "../detailModal/DetailModal";

import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./project.scss";

const Project = ({ title, image, subTitle, description, gitLink }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="project">
      <div className="modal">
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          className="modal-component"
        >
          <DetailModal
            title={title}
            image={image}
            subTitle={subTitle}
            description={description}
            gitLink={gitLink}
          />
        </Modal>
      </div>
      <div className="wrapper-project" data-aos="flip-right">
        <div className="title-project">{title}</div>
        <div className="img-project">
          <img src={require(`../../../images/${image}`)} alt="" />
        </div>
        <div className="subtitle-project">{subTitle}</div>
        <div className="btn-project">
          <div className="view-btn-project" onClick={showModal}>
            <VisibilityIcon className="icon-project" />
          </div>
          <div className="view-github-project">
            <a href={gitLink} target="_blank">
              <GitHubIcon className="icon-project" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
