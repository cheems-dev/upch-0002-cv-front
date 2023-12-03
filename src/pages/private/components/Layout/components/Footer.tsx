import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer ">
      <div>
        <p>©{currentYear} Universidad Peruana Cayetano Heredia</p>
      </div>
    </div>
  );
};

export default Footer;
