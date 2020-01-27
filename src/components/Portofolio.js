import React from "react";
import Thumbpoll from "../assets/images/thumbpoll-logo.png";
import Task from "../assets/images/todo.png";
import Health from "../assets/images/health.png";

const Porto = () => {
  return (
    <div
      id="porto"
      style={{
        backgroundColor: "#e8e8e8",
        paddingTop: "90px",
        paddingBottom: "60px",
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
              <h4>Thumbpoll</h4>
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
              <h4>Simple Task</h4>
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
              <h4>Body Mass Index</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Porto;
