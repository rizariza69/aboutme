import React from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import ParticlesBg from "particles-bg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";

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
    <Container fluid>
      <Row md={12}>
        <Col md={12}>
          <ParticlesBg type="circle" bg={true} />
          <header
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div style={{ width: "100%" }}>
              <Navbar
                expand="lg"
                style={{
                  justifyContent: "space-between",
                  position: "absolute",
                  top: "0",
                  width: "100%",
                  zIndex: 1
                }}
                bg-transparent
              >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <WrapNavbar style={{ margin: "0 auto" }}>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link
                        href="#home"
                        style={{
                          fontFamily: "Open Sans",
                          color: "white"
                        }}
                      >
                        <strong>HOME</strong>
                      </Nav.Link>
                      <Nav.Link
                        href="#about"
                        style={{ fontFamily: "Open Sans", color: "white" }}
                      >
                        <strong>ABOUT</strong>
                      </Nav.Link>
                      <Nav.Link
                        href="#resume"
                        style={{ fontFamily: "Open Sans", color: "white" }}
                      >
                        <strong>RESUME</strong>
                      </Nav.Link>
                      <Nav.Link
                        href="#porto"
                        style={{ fontFamily: "Open Sans", color: "white" }}
                      >
                        <strong>PORTOFOLIO</strong>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </WrapNavbar>
              </Navbar>
            </div>
            <BannerWrap>
              <Col xs>
                <Row>
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
                          fontSize: "80px",
                          fontFamily: "Open Sans"
                        }}
                      >
                        <strong>Im Muhammad Riza</strong>
                      </h1>
                      <h4
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontFamily: "PT Sans,sans-serif"
                        }}
                      >
                        I am a Software Engineer and I am enthusiastic about
                        web-based application technologists and mobile-based
                        application technologists{" "}
                      </h4>
                    </div>
                  </div>
                </Row>
              </Col>
            </BannerWrap>
            <a href="#about" style={{ position: "absolute", bottom: "20px" }}>
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                style={{ fontSize: "60px", color: "white" }}
              />
            </a>
          </header>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
