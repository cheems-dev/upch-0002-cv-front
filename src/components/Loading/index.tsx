import React from "react";
import "./styles/ModalLoading.scss";

const Loading: React.FC = () => (
  <div className="outer-loader text-center">
    <div className="col-12">
      <div className="sp sp-3balls" />
    </div>
  </div>
);

export default Loading;
