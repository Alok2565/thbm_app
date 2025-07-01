import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NicLogo from "../assets/images/NIC-logo.svg";
import DigitalLogo from "../assets/images/Digital.svg";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="bg-dark text-white mt-auto">
                {/* Main Footer Content */}
                {/* <div className="container py-3">
                    <Row>
                        <Col md={12}>
                            <p className="text-center">Disclaimer: Prior to use, please ensure that your systems are equipped with anti-virus software for added security.</p>
                        </Col>
                        <div className="col-md-6 text-md-end">
                            <ul class="footerLogo">
                                <li>
                                    <a href="">
                                        <img src={NicLogo} class="img-fluid" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={DigitalLogo} class="img-fluid" />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </Row>
                </div> */}
                <section className="py-2 py-xl-8 border-top border-light">
                    <Col className="container overflow-hidden">
                        <Row className="row gy-4 gy-lg-0">
                            <Col className="col-12">
                                <p className="text-white text-center mt-2">
                                    <span style={{ fontSize: "20px" }}>Disclaimer: </span>
                                    <span style={{ fontSize: "17px" }}>
                                        Prior to use, please ensure that your systems are equipped with anti-virus software for added security.
                                    </span>
                                </p>
                                <ul className="footerLogo d-flex justify-content-center p-0" style={{ listStyle: "none" }}>
                                    <li className="mx-3">
                                        <a href="javascrip:void(0)">
                                            <img src={NicLogo} className="img-fluid" alt="NIC Logo" style={{ maxHeight: "60px" }} />
                                        </a>
                                    </li>
                                    <li className="mx-3">
                                        <a href="javascrip:void(0)">
                                            <img src={DigitalLogo} className="img-fluid" alt="Digital India Logo" style={{ maxHeight: "60px" }} />
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </section>
                <Col className="py-2 border-light-subtle">
                    <Col className="container overflow-hidden">
                        <Col className="row gy-md-0">
                            <Col className="col-12 text-center">
                                <p className="copyright-text text-white" style={{ fontSize: "14px" }}>
                                    Website contents are being maintained by Ministry of Health and Family Welfare, Government of India.
                                    Website has been designed, developed, maintained and hosted by
                                    <Link className="text-primary-link" to="https://www.nic.in/" target="_blank" rel="noopener noreferrer"
                                        style={{ textDecoration: "none", color: "#2584C6" }}> National Informatics Centre (NIC) </Link>
                                </p>

                            </Col>
                        </Col>
                    </Col>
                </Col>
                {/* <div className="bg-secondary text-center py-2">
                    &copy; {new Date().getFullYear()} MyApp. All rights reserved.
                </div> */}
            </footer >
        </>
    )
}

export default Footer
