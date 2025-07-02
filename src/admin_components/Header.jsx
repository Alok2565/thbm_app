// Header.js
import React from "react";
import { Col, Container } from "react-bootstrap";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Container fluid>
        <span
          className="navbar-brand mb-0 h1 w-100 text-center"
          style={{ fontWeight: 700, fontSize: "25px" }}
        >
          Transfer of Human Biological Material (THBM)
        </span>
        <Col className="d-flex align-items-center">
          <span className="me-2 fw-bold">Welcome</span>
          <span className="text-success">alok.admin@yopmail.com</span>
          <i className="bi bi-person-fill ms-2"></i>
        </Col>
      </Container>
    </nav>
  );
}
export default Header;
