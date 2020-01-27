import React from "react";
import styled from "styled-components";
import Avatar from "../assets/images/avatar.png";

const About = () => {
  return (
    <div id="about" style={{ backgroundColor: "#2B2B2B" }}>
      <div className="container">
        <div
          className="row"
          style={{ padding: "20px", paddingBottom: "50px", paddingTop: "50px" }}
        >
          <div className="col-md-4">
            <img
              src={Avatar}
              alt="Lights"
              style={{ width: "75%", paddingTop: "50px" }}
            />
          </div>
          <div className="col-md-8">
            <h4
              style={{
                color: "white",
                paddingTop: "50px",
                marginBottom: "20px",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              <strong>About Me</strong>
            </h4>
            <p
              style={{
                color: " #7A7A7A",
                textAlign: "justify",
                paddingRight: "20px",
                lineHeight: "30px",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              I have been working 8 years to become a business development and
              marketing Make me change my mind about technology for the future,
              and now I switch my career Being a software engineer for the
              future can be a<strong>Professional Fullstack developers </strong>{" "}
              and <strong>owns Company.</strong>
            </p>
            <h4
              style={{
                color: "white",
                paddingTop: "30px",
                marginBottom: "20px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "22px"
              }}
            >
              <strong>Contact Details</strong>
            </h4>
            <p
              style={{
                color: " #7A7A7A",
                textAlign: "justify",
                paddingRight: "20px",
                lineHeight: "30px"
              }}
            >
              <ul style={{ listStyle: "none", paddingInlineStart: "0" }}>
                <li
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "15px"
                  }}
                >
                  Muhammad Riza
                </li>
                <li
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "15px"
                  }}
                >
                  Jalan Lombok No.35 004/002, Pondok Cabe Ilir, Pamulang,
                  Tangerang Selatan
                </li>
                <li
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "15px"
                  }}
                >
                  +62811-9780-702
                </li>
                <li
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "15px"
                  }}
                >
                  riza.riza69@gmail.com
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
