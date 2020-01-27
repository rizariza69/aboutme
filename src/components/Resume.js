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
    <div id="resume" style={{ marginBottom: "40px", backgroundColor: "white" }}>
      <resumeWrap>
        <div
          className="row"
          style={{
            marginTop: "30px",
            paddingBottom: "30px",
            borderBottom: "solid 2px #e8e8e8"
          }}
        >
          <div className="col-md-4">
            <h5
              style={{
                borderBottom: "3px solid #179038",
                paddingBottom: "6px",
                width: "40%"
              }}
            >
              EDUCATION
            </h5>
          </div>
          <div className="col-md-8">
            <h3>Impactbyte Coding Boothcamp - Fullstack Web Developer</h3>
            <p style={{ lineHeight: "30px" }}>Graduated. March - Mei 2019</p>
            <p style={{ textAlign: "justify", lineHeight: "30px" }}>
              Learn about coding from Logic Javascript and about Frontend web
              development (Figma UI and UX, HTML, CSS, Object Oriented
              Programming (OOP), React and Redux, netlify) and backend web
              development (Express, Mongoose, MongoDB, mySQL, Sequelize,
              Rest-API Herokku).
            </p>
            <h3>Hacktiv8 Coding Boothcamp - Fullstack Web Developer</h3>
            <p style={{ lineHeight: "30px" }}>
              Until Phase 2. January - August 2018
            </p>
            <p style={{ textAlign: "justify", lineHeight: "30px" }}>
              Learn about coding from Logic Javascript and about Frontend web
              development (Figma UI and UX, HTML, CSS, Object Oriented
              Programming (OOP), React and Redux, netlify) and backend web
              development (Express, Mongoose, MongoDB, mySQL, Sequelize,
              Rest-API Herokku).{" "}
            </p>
            <h3>Master of Business Administration</h3>
            <p style={{ lineHeight: "30px" }}>
              Masters in Entrepreunersip. 2013-2015
            </p>
            <p style={{ textAlign: "justify", lineHeight: "30px" }}>
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
            borderBottom: "solid 2px #e8e8e8"
          }}
        >
          <div className="col-md-4">
            <h5
              style={{
                borderBottom: "3px solid #179038",
                paddingBottom: "6px",
                width: "22%"
              }}
            >
              WORK
            </h5>
          </div>
          <div className="col-md-8">
            <h3>Backcend Software Engineer - ManyOption</h3>
            <p style={{ lineHeight: "30px" }}> September 2019 - January 2020</p>
            <p style={{ textAlign: "justify", lineHeight: "30px" }}>
              Create Rest API use Node.JS, MongoDB, Yoman Express, my last
              project create 45 Rest API for download Excell (use exceljs){" "}
            </p>
            <h3>React Native Software Engineer - Weplay</h3>
            <p style={{ lineHeight: "30px" }}> July - August 2019</p>
            <p style={{ textAlign: "justify", lineHeight: "30px" }}>
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
                width: "22%"
              }}
            >
              SKILL
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
                  <h4>Javascript</h4>
                  <ProgressBar
                    animated
                    now={70}
                    label={`70%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4>ReactJS</h4>
                  <ProgressBar
                    animated
                    now={80}
                    label={`80%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4>CSS</h4>
                  <ProgressBar
                    animated
                    now={70}
                    label={`70%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4>HTML</h4>
                  <ProgressBar
                    animated
                    now={70}
                    label={`70%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4>Express</h4>
                  <ProgressBar
                    animated
                    now={70}
                    label={`70%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4>Sequelize</h4>
                  <ProgressBar
                    animated
                    now={60}
                    label={`60%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4>MongoDB</h4>
                  <ProgressBar
                    animated
                    now={60}
                    label={`60%`}
                    style={{ height: "30px" }}
                  />
                </div>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <div>
                  <h4>Mongoose</h4>
                  <ProgressBar
                    animated
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
