import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import ParticlesBg from "particles-bg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  const WrapNavbar = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const BannerWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    color: black;
    font-weight: 5px;
    justify-content: row;
    align-items: center;
    align-content: center;
    align-self: center;
  
  `;
  
  return (
    <div id="home" >
      <ParticlesBg type="circle" bg={true} />
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
                  fontFamily:'Roboto'
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
        <a href="#about" style={{position:"absolute", bottom:"20px"}}>
        <FontAwesomeIcon icon={faChevronCircleDown}  style={{fontSize:"60px", color:"white"}}      />
        </a>
      </header>
    </div>
  );
};

export default Header;