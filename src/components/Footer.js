import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Copyright = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    /* height: 20px; */
    padding: 10px;
  `;
  return (
    <div id="footer">
      <Copyright>
        <p
          style={{ color: "white", justifyContent: "center", fontSize: "15px" }}
        >
          &copy; Copyright 2020 Muhammad Riza{" "}
        </p>
      </Copyright>
    </div>
  );
};

export default Footer;
