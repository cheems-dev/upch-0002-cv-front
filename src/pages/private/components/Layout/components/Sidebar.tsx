/* eslint-disable jsx-a11y/anchor-is-valid */
import LogoImg from "@assets/img/logo-blanco.png";
import avatarNeutro from "@assets/img/avatar-neutro.png";
import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "routes/utils";

const Sidebar: React.FC = () => {
  const handleSizeSidebar = () => {
    const homeSelector = document.querySelector(".home");
    if (document.querySelector(".home.short")) {
      if (homeSelector) homeSelector.classList.remove("short");
      localStorage.removeItem("keepSidebar");
    } else {
      if (homeSelector) homeSelector.classList.add("short");
      localStorage.setItem("keepSidebar", "true");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebartop d-flex">
        <div className="logo">
          <img src={LogoImg} alt="" />
        </div>
        <div
          className="menu"
          onClick={() => {
            handleSizeSidebar();
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M9.73427 12.5656L5.54997 16.7499C5.13577 17.1641 5.13577 17.8357 5.54997 18.2499C5.96417 18.6641 6.63577 18.6641 7.04997 18.2499L12.5929 12.707C12.9834 12.3165 12.9834 11.6833 12.5929 11.2928L7.04997 5.74989C6.63577 5.33569 5.96417 5.33569 5.54997 5.74989C5.13577 6.16409 5.13577 6.83569 5.54997 7.24989L9.73427 11.4342C10.0467 11.7466 10.0467 12.2532 9.73427 12.5656Z"
              fill="white"
            />
            <path
              d="M15.7343 12.5656L11.55 16.7499C11.1358 17.1641 11.1358 17.8357 11.55 18.2499C11.9642 18.6641 12.6358 18.6641 13.05 18.2499L18.5928 12.707C18.9834 12.3165 18.9834 11.6833 18.5928 11.2928L13.05 5.74989C12.6358 5.33569 11.9642 5.33569 11.55 5.74989C11.1358 6.16409 11.1358 6.83569 11.55 7.24989L15.7343 11.4342C16.0467 11.7466 16.0467 12.2532 15.7343 12.5656Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="divider" />
      <nav>
        <ul>
          <li>
            <NavLink
              to={ROUTES.private.home}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 2H4C2.89543 2 2 2.89543 2 4V9C2 10.1046 2.89543 11 4 11H9C10.1046 11 11 10.1046 11 9V4C11 2.89543 10.1046 2 9 2Z"
                  fill="white"
                />
                <path
                  opacity="0.3"
                  d="M20 2H15C13.8954 2 13 2.89543 13 4V9C13 10.1046 13.8954 11 15 11H20C21.1046 11 22 10.1046 22 9V4C22 2.89543 21.1046 2 20 2Z"
                  fill="white"
                />
                <path
                  opacity="0.3"
                  d="M20 13H15C13.8954 13 13 13.8954 13 15V20C13 21.1046 13.8954 22 15 22H20C21.1046 22 22 21.1046 22 20V15C22 13.8954 21.1046 13 20 13Z"
                  fill="white"
                />
                <path
                  opacity="0.3"
                  d="M9 13H4C2.89543 13 2 13.8954 2 15V20C2 21.1046 2.89543 22 4 22H9C10.1046 22 11 21.1046 11 20V15C11 13.8954 10.1046 13 9 13Z"
                  fill="white"
                />
              </svg>
              <span className="text">Inicio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.private.cv}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                  fill="currentColor"
                />
                <path
                  d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                  fill="currentColor"
                />
              </svg>

              <span className="text">Editar mi CV</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.private.people}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0173 9H15.3945C14.2833 9 13.263 9.61425 12.7431 10.5963L12.154 11.7091C12.0645 11.8781 12.1072 12.0868 12.2559 12.2071L12.6402 12.5183C13.2631 13.0225 13.7556 13.6691 14.0764 14.4035L14.2321 14.7601C14.2957 14.9058 14.4396 15 14.5987 15H18.6747C19.7297 15 20.4057 13.8774 19.912 12.945L18.6686 10.5963C18.1487 9.61425 17.1285 9 16.0173 9Z"
                  fill="currentColor"
                />
                <rect
                  opacity="0.3"
                  x="14"
                  y="4"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                />
                <path
                  d="M4.65486 14.8559C5.40389 13.1224 7.11161 12 9 12C10.8884 12 12.5961 13.1224 13.3451 14.8559L14.793 18.2067C15.3636 19.5271 14.3955 21 12.9571 21H5.04292C3.60453 21 2.63644 19.5271 3.20698 18.2067L4.65486 14.8559Z"
                  fill="currentColor"
                />
                <rect
                  opacity="0.3"
                  x="6"
                  y="5"
                  width="6"
                  height="6"
                  rx="3"
                  fill="currentColor"
                />
              </svg>

              <span className="text">Mi equipo</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="account">
        <div className="avatar">
          <img src={avatarNeutro} alt="" />
        </div>
        <div className="name">
          <p className="mb-0 fw-regular">
            Maria del Carmen Miniza Stoll <br />
            <span>DIRECTOR DE DESARROLLO HUMANO</span>
          </p>
        </div>
        <div className="logout">
          <a href="#">
            <i className="bi bi-box-arrow-in-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
