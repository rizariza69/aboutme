import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import ParticlesBg from "particles-bg";

const Header = () => {
  const WrapNavbar = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const BannerWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    color: black;
    font-weight: 5px;
    justify-content: row;
    align-items: center;
    align-content: center;
    align-self: center;
  `;
  const Container = styled.div`
   background: url('../assets/images/background.jpg');
  `;

  return (
    <div id="home" style={{ backgroundImage: "url('../assets/images/background.jpg')"}}>
      {/* <ParticlesBg type="circle" bg={true} /> */}
      <header
        style={{
          height: "100vh",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
         <Navbar expand="lg" style={{ justifyContent: "center", position:"absolute", top:"0" }} bg-transparent>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <WrapNavbar>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#resume">RESUME</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </WrapNavbar>
      </Navbar>
        <BannerWrap>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              className="container"
              style={{
                justifyContent: "center",
                width: "80%",
                padding: "4rem",
                marginBottom: "50px"
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "70px",
                }}
              >
                Im Muhammad Riza
              </h1>
              <h4
                style={{
                  textAlign: "center",
                  color: "white"
                }}
              >
                I am a Software Engineer and I am enthusiastic about web-based
                application technologists and mobile-based application
                technologists{" "}
              </h4>
            </div>
          </div>
        </BannerWrap>
      </header>
    </div>
  );
};

export default Header;