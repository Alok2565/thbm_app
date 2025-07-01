import { Col, Container, Row } from "react-bootstrap";
import { useProject } from "../components/ProjectContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BreadcrumbBack from '../components/BreadCrubmBack';
import Breadcrumb from '../components/Breadcrumb';

function About() {
    const { title } = useProject();
    return (
        <>
            <Col>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`About Us | ${title}`}</title>
                </Helmet>
                <BreadcrumbBack title={`About Us`} />
                <Breadcrumb title={`About Us`} />
                <section className="introduction py-3">
                    <Container className="mt-3">
                        <Row>
                            <Col md={12}>
                                <div className="content-item">
                                    <Col className="title_heading">
                                        <h1 className="mainHeading"> About Us</h1>
                                    </Col>
                                    <p className="justify-content" style={{ textAlign: "justify" }}>Indian Council of Medical Research under Department of Health Research, Ministry of Health and Family Welfare, Government of India has developed an online portal for providing No Objection Certificate (NOC) related to the transfer of human biological material for commercial purposes/ contract research by Indian companies/organizations.</p>
                                    <p className="justify-content" style={{ textAlign: "justify" }}>This secure online platform enables applicants to obtain the necessary NOC for the export of human biological material for the said purpose.</p>
                                    <p className="text-justify" style={{ textAlign: "justify" }}>The portal will strengthen interdepartmental synergies and increase efficacy in functioning of GoI Departments/ Agencies involved in the consideration of cases related to transfer of human biological material. This will streamline the regulatory process and ensure transparent and regulated export of human biological material in compliance with national regulations.</p>
                                    <p>Before applying please read the <Link to="https://main.icmr.nic.in/node/46876"> guidelines</Link> available on ICMR website.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section >
            </Col>
        </>
    )
}
export default About