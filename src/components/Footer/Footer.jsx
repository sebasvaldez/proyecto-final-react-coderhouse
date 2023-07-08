import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center">
        <div className="row">
          <div className=" mt-md-0 mt-3">
            <h5 className="text-uppercase link mb-2 text-center">
              Proyecto final - curso React
            </h5>
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
