import React from "react";
import "../App.css";
import { FaHouseChimney } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { BsFillPuzzleFill } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex={-1}
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          />
        </div>
        <div className="d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link d-flex align-items-center gap-2 active"
                aria-current="page"
                href="#"
              >
                <FaHouseChimney />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/add"
                className="nav-link d-flex align-items-center gap-2"
                href="#"
              >
                <FaEdit />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 text-muted" href="#">
                <FaUsers />
               Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 text-muted" href="#">
                <GoGraph />
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 text-muted" href="#">
                <BsFillPuzzleFill />
                Integrations
              </a>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Saved reports</span>
            <a
              className="link-secondary"
              href="#"
              aria-label="Add a new report"
            >
              <CiCirclePlus size={25} />
            </a>
          </h6>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 text-muted" href="#">
                <IoIosPaper />
                Current month
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 text-muted" href="#">
                <IoIosPaper />
                Last quarter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 text-muted" href="#">
                <IoIosPaper />
                Social engagement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 text-muted" href="#">
                <IoIosPaper />
                Year-end sale
              </a>
            </li>
          </ul>
          <hr className="my-3" />
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 text-muted" href="#">
                <MdOutlineSettings />
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 text-muted" href="#">
                <FaSignOutAlt />
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
