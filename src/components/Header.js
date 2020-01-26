import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

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
  const Background = styled.div`
    background-image: url("../assets/images/photo-of-turned-on-laptop-computer-943096.jpg");
  `;
  return (
    <div id="home">
      <Navbar bg="light" expand="lg" style={{ justifyContent: "center" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <WrapNavbar>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#resume">RESUME</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </Navbar.Collapse>
        </WrapNavbar>
      </Navbar>
      <header
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BannerWrap>
          <h1>Im Muhammad Riza</h1>
          <h4>
            I am a Software Engineer and I enthusiastic about technology
            development web aplication and mobile aplication{" "}
          </h4>
        </BannerWrap>
      </header>
    </div>
  );
};

export default Header;
