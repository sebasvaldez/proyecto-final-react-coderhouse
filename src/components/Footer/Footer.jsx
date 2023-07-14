import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center">
        <div className="row">
          <div className=" mt-md-0 mt-3">
            <span className="text-uppercase  mb-2 text-center text-white ">
              Proyecto final - curso React
            </span>
          </div>

          <hr className="clearfix w-100 d-md-none py-0 mt-2 " />
        </div>
      </div>

      <div className="text-center py-3">
        <Link to="https://github.com/sebasvaldez" className="link">
          {" "}
          Marcelo Sebastián Valdez
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
