import React from "react";

import { Modal } from "antd";
import "./detailmodal.scss";

const DetailModal = ({ title, image, subTitle, description, gitLink }) => {
  return (
    <div className="detail-modal">
      <div className="modal-wrapper">
        <div className="modal-title">{title}</div>
        <div className="modal-subtitle">{subTitle}</div>
        <div className="modal-image">
          {/* <img src={require(`../../../images/${image}`)} alt="" /> */}
        </div>
        <div className="modal-description">{description}</div>
        <div className="modal-gitlink">
          <a href={gitLink} target="_blank">GitHub Link</a>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
