import React, { Children } from "react";
import { Header } from "./components";
import Sidebar from "./components/Sidebar";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  const elements = Children.toArray(children);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <Sidebar />
        <div className="main">{elements[0]}</div>
        <div className="footer ">
          <div>
            <p>©2022 Universidad Peruana Cayetano Heredia</p>
          </div>
        </div>
      </div>
      {elements[1]}
    </>
  );
};

export default Layout;
