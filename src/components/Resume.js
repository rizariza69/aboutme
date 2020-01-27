import React from "react";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

const Resume = () => {
  const resumeWrap = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 5rem;
    margin-bottom: 30px;
  `;
  return (
    <div
      id="resume"
      style={{
        marginTop: "40px",
        marginBottom: "40px",
        backgroundColor: "white"
      }}
    >
      <resumeWrap>
        <div
          className="row"
          style={{
            marginTop: "30px",
            paddingBottom: "30px",
            borderBottom: "solid 5px #e8e8e8"
          }}
        >
          <div className="col-md-4">
            <h5
              style={{
                borderBottom: "3px solid #179038",
                paddingBottom: "6px",
                width: "33%",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              <strong>EDUCATION</strong>
            </h5>
          </div>
          <div className="col-md-8">
            <h3 style={{ fontFamily: "Open Sans, sans-serif" }}>
              <strong>
                Impactbyte Coding Boothcamp - Fullstack Web Developer
              </strong>
            </h3>
            <p
              style={{
                lineHeight: "30px",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              <i>Graduated. March - Mei 2019</i>
            </p>
            <p
              style={{
                textAlign: "justify",
                lineHeight: "30px",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              Learn about coding from Logic Javascript and about Frontend web
              development (Figma UI and UX, HTML, CSS, Object Oriented
              Programming (OOP), React and Redux, netlify) and backend web
              development (Express, Mongoose, MongoDB, mySQL, Sequelize,
              Rest-API Herokku).
            </p>
            <h3 style={{ fontFamily: "Open Sans, sans-serif" }}>
              <b>Hacktiv8 Coding Boothcamp - Fullstack Web Developer</b>
            </h3>
            <p
              style={{
                lineHeight: "30px",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              <i>Until Phase 2. January - August 2018</i>
            </p>
            <p
              style={{
                textAlign: "justify",
                lineHeight: "30px",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              Learn about coding from Logic Javascript and about Frontend web
              development (Figma UI and UX, HTML, CSS, Object Oriented
              Programming (OOP), React and Redux, netlify) and backend web
              development (Express, Mongoose, MongoDB, mySQL, Sequelize,
              Rest-API Herokku).{" "}
            </p>
            <h3 style={{ fontFamily: "Open Sans, sans-serif" }}>
              <b>Master of Business Administration</b>
            </h3>
            <p
              style={{
                lineHeight: "30px",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              <i>Masters in Entrepreunersip. 2013-2015</i>
            </p>
            <p
              style={{
                textAlign: "justify",
                lineHeight: "30px",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              Learn about Entrepreunership and Marketing. to know about
              strategic business, market research and etc{" "}
            </p>
          </div>
        </div>

        <div
          className="row"
          style={{
            marginTop: "30px",
            paddingBottom: "30px",
            borderBottom: "solid 5px #e8e8e8"
          }}
        >
          <div className="col-md-4">
            <h5
              style={{
                borderBottom: "3px solid #179038",
                paddingBottom: "6px",
                width: "18%",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              <b>WORK</b>
            </h5>
          </div>
          <div className="col-md-8">
            <h3 style={{ fontFamily: "Open Sans, sans-serif" }}>
              <b>ManyOption</b>
            </h3>
            <p
              style={{
                lineHeight: "30px",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              {" "}
              <i>Backcend Software Engineer .September 2019 - January 2020</i>
            </p>
            <p
              style={{
                textAlign: "justify",
                lineHeight: "30px",
                fontFamily: "Opens Sans, sans-serif"
              }}
            >
              Create Rest API use Node.JS, MongoDB, Yoman Express, my last
              project create 45 Rest API for download Excell (use exceljs){" "}
            </p>
            <h3 style={{ fontFamily: "Open Sans, sans-serif" }}>
              <b>Weplay</b>
            </h3>
            <p
              style={{
                lineHeight: "30px",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              <i>React Native Software Engineer. July - August 2019</i>
            </p>
            <p
              style={{
                textAlign: "justify",
                lineHeight: "30px",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              in this Company using IGINTE Boilerplate, last project i create a
              few components and fixed bugging{" "}
            </p>
          </div>
        </div>

        <div
          className="row"
          style={{
            marginTop: "30px",
            paddingBottom: "30px"
          }}
        >
          <div className="col-md-4">
            <h5
              style={{
                borderBottom: "3px solid #179038",
                paddingBottom: "6px",
                width: "17%",
                fontFamily: "Open Sans, sans-serif"
              }}
            >
              <b>SKILL</b>
            </h5>
          </div>
          <div className="col-md-8">
            <ul
              style={{
                "list-style": "none",
                paddingInlineStart: "0",
                marginBottom: "20px"
              }}
            >
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4 style={{ fontFamily: "Open Sans, sans-serif" }}>
                    <b>Javascript</b>
                  </h4>
                  <ProgressBar
                    animated
                    variant="success"
                    now={70}
                    label={`70%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4 style={{ fontFamily: "Open Sans, sans-serif" }}>
                    <b>ReactJS</b>
                  </h4>
                  <ProgressBar
                    animated
                    variant="success"
                    now={80}
                    label={`80%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4 style={{ fontFamily: "Open Sans, sans-serif" }}>
                    <b>CSS</b>
                  </h4>
                  <ProgressBar
                    animated
                    variant="success"
                    now={70}
                    label={`70%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4 style={{ fontFamily: "Open Sans, sans-serif" }}>
                    <b>HTML</b>
                  </h4>
                  <ProgressBar
                    animated
                    variant="success"
                    now={70}
                    label={`70%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4 style={{ fontFamily: "Open Sans, sans-serif" }}>
                    <b>Express</b>
                  </h4>
                  <ProgressBar
                    animated
                    variant="success"
                    now={70}
                    label={`70%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4 style={{ fontFamily: "Open Sans, sans-serif" }}>
                    <b>Sequelize</b>
                  </h4>
                  <ProgressBar
                    animated
                    variant="success"
                    now={60}
                    label={`60%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4 style={{ fontFamily: "Open Sans, sans-serif" }}>
                    <b>MongoDB</b>
                  </h4>
                  <ProgressBar
                    animated
                    variant="success"
                    now={60}
                    label={`60%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4 style={{ fontFamily: "Open Sans, sans-serif" }}>
                    <b>Mongoose</b>
                  </h4>
                  <ProgressBar
                    animated
                    variant="success"
                    now={60}
                    label={`60%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </resumeWrap>
    </div>
  );
};
export default Resume;
