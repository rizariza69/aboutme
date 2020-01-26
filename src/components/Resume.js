import React from "react";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

const Resume = () => {
  const resumeWrap = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
  `;
  return (
    <div>
      <resumeWrap>
        <div class="row">
          <div class="col-md-4">
            <h1>EDUCATION</h1>
          </div>
          <div class="col-md-8">
            <h1>Apa aja</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <h1>WORK</h1>
          </div>
          <div class="col-md-8">
            <h1>Apa aja</h1>
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
