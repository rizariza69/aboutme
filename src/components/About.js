import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <div id="about" style={{ height: "100vh", backgroundColor: "black"}}>
      <div className="container">
        <h1 style={{ color: "white" }}>About</h1>
        <div className="row">
          <div className="col-md-4">
            <img src="#" alt="Lights" style={{ width: "100%" }} />
          </div>
          <div className="col-md-8">
            <p style={{ color: " white", textAlign:"justify" }}>
              I have been working 8 years to become a business development and
              marketing Make me change my mind about technology for the future,
              and now I switch my career Being a software engineer for the
              future can be a<strong>Professional Fullstack developers </strong>{" "}
              and <strong>owns Company.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
