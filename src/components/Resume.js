import React from "react";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

const Resume = () => {
  const resumeWrap = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 5rem;
  `;
  return (
    <div id="resume">
      <resumeWrap>
        <div class="row">
          <div class="col-md-4">
            <h4>EDUCATION</h4>
          </div>
          <div class="col-md-8">
            <h3>Impactbyte Coding Boothcamp - Fullstack Web Developer</h3>
            <p>Learn about coding from Logic Javascript and about Frontend web development (Figma UI and UX, HTML, CSS, Object Oriented Programming (OOP), React and Redux, netlify) and backend web development (Express, Mongoose, MongoDB, mySQL, Sequelize, Rest-API Herokku)</p>
            <h3>Hacktiv8 Coding Boothcamp - Fullstack Web Developer</h3>
            <p>Learn about coding from Logic Javascript and about Frontend web development (Figma UI and UX, HTML, CSS, Object Oriented Programming (OOP), React and Redux, netlify) and backend web development (Express, Mongoose, MongoDB, mySQL, Sequelize, Rest-API Herokku) </p>
            <h3>Master of Business Administration</h3>
            <p>Learn about Entrepreunership and Marketing. to know about strategic business, market research and etc </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <h1>WORK</h1>
          </div>
          <div class="col-md-8">
          <h3>Backcend Software Engineer - ManyOption</h3>
          <p>Create Rest API use Node.JS, MongoDB, Yoman Express, my last project create 45 Rest API for download Excell (use exceljs) </p>
          <h3>React Native Software Engineer - Weplay</h3>
          <p>in this Company using IGINTE Boilerplate, last project i create a few components and fixed bugging </p>

          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <h1>SKILL</h1>
          </div>
          <div class="col-md-8">
            <ul style={{ "list-style": "none" }}>
              <li>
                <div>
                  <h4>Javascript</h4>
                  <ProgressBar animated now={70} label={`70%`} />
                </div>
              </li>
              <li>
                <div>
                  <h4>ReactJS</h4>
                  <ProgressBar animated now={80} label={`80%`} />
                </div>
              </li>
              <li>
                <div>
                  <h4>CSS</h4>
                  <ProgressBar animated now={60} label={`60%`} />
                </div>
              </li>
              <li>
                <div>
                  <h4>HTML</h4>
                  <ProgressBar animated now={70} label={`70%`} />
                </div>
              </li>
              <li>
                <div>
                  <h4>Express</h4>
                  <ProgressBar animated now={70} label={`70%`} />
                </div>
              </li>
              <li>
                <div>
                  <h4>Sequelize</h4>
                  <ProgressBar animated now={60} label={`60%`} />
                </div>
              </li>
              <li>
                <div>
                  <h4>MongoDB</h4>
                  <ProgressBar animated now={60} label={`60%`} />
                </div>
              </li>
              <li>
                <div>
                  <h4>Mongoose</h4>
                  <ProgressBar animated now={60} label={`60%`} />
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
