import React from "react";
import Thumbpoll from "../assets/images/thumbpoll-logo.png";
import Task from "../assets/images/todo.png";
import Health from "../assets/images/health.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

const Porto = () => {
  return (
    <div
      id="porto"
      style={{
        backgroundColor: "#e8e8e8",
        paddingTop: "90px",
        paddingBottom: "20px",
        paddingRight: "30px",
        paddingLeft: "30px"
      }}
    >
      <h3
        className="text-center"
        style={{
          marginBottom: "60px",
          color: "#95A3A3",
          fontSize: "15px",
          fontFamily: "Open Sans"
        }}
      >
        <strong>CHECK OUT MY PORTOFOLIO</strong>
      </h3>
      <div className="row">
        <div className="col-md-4">
          <div className="text-center">
            <a href="/thumbpoll.co">
              <img
                src={Thumbpoll}
                alt="thumbpoll.co"
                style={{ width: "80%", marginBottom: "50px" }}
              />
              <h4
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#7A7A7A"
                }}
              >
                <b>POLLING WEB</b>
              </h4>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <a href="https://rz-simple-task.netlify.com/">
              <img
                src={Task}
                alt="task-simple"
                style={{ width: "56%", marginBottom: "12px" }}
              />
              <h4
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#7A7A7A"
                }}
              >
                <b>SIMPLE TASK</b>
              </h4>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <a href="https://riza-project-body-mass-index.netlify.com/">
              <img
                src={Health}
                alt="body-mass-weight"
                style={{ width: "60%", marginBottom: "35px" }}
              />
              <h4
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#7A7A7A"
                }}
              >
                <b>SIMPLE BODY MASS INDEX</b>
              </h4>
            </a>
          </div>
        </div>
      </div>
      <div
        className="text-center"
        style={{ marginTop: "100px", paddingTop: "30px" }}
      >
        <a href="#home" style={{ marginTop: "50px" }}>
          <FontAwesomeIcon
            icon={faChevronCircleUp}
            style={{ fontSize: "60px", color: "#2B2B2B" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Porto;
