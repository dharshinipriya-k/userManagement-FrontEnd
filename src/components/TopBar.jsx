import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TopBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand
              onClick={() => navigate("/dashboard")}
              style={{ cursor: "pointer" }}
            >
              User Management
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate("/dashboard")}>
                  Dashboard
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/add-user")}>
                  Add User
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default TopBar;
