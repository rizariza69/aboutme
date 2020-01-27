import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const Copyright = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    flex-direction: column;
    align-items: center;
    /* height: 20px; */
    padding: 10px;
  `;
  return (
    <div id="footer">
      <Copyright>
        <div style={{ marginBottom: " 30px", marginTop: "30px" }}>
          <a href="https://github.com/rizariza69">
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                fontSize: "45px",
                color: "#e8e8e8",
                marginRight: "20px",
                marginLeft: "20px"
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/m-riza/">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                fontSize: "45px",
                color: "#e8e8e8",
                marginRight: "20px",
                marginLeft: "20px"
              }}
            />
          </a>
        </div>
        <p
          style={{
            color: "#e8e8e8",
            justifyContent: "center",
            fontSize: "15px"
          }}
        >
          &copy; Copyright 2020 Muhammad Riza{" "}
        </p>
      </Copyright>
    </div>
  );
};

export default Footer;
