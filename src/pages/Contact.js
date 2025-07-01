
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BreadcrumbBack from '../components/BreadCrubmBack';
import Breadcrumb from '../components/Breadcrumb';
import { useProject } from "../components/ProjectContext";


function Contact() {
    const { title } = useProject();
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`Contact Us | ${title}`}</title>
            </Helmet>
            <BreadcrumbBack title={`Contact Us`} />
            <Breadcrumb title={`Contact Us`} />
            <Col>
                <section className="introduction py-3">
                    <Container className="mt-3">
                        <Row>
                            <Col md={12}>
                                <div className="content-item">
                                    <Col className="title_heading">
                                        <h1 className="mainHeading"> Contact Us</h1>
                                    </Col>
                                    <p style={{ textAlign: "justify" }}><span>Transfer of Human Biological Material Secretariat</span><br />
                                        <span>International Health Division</span><br /><span>Indian Council of Medical Research</span><br />
                                        <span>V. Ramalingaswami Bhawan, P.O. Box No. 4911</span><br />
                                        <span>Ansari Nagar, New Delhi - 110029, India</span>
                                    </p>
                                    <p style={{ textAlign: "justify" }}> Email ID : thbm[dot]hq[at]icmr[dot]gov[dot]in</p>
                                    <p style={{ textAlign: "justify" }}>Phone Number: 011-26588755</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section >
            </Col>

        </>
    )
}
export default Contact

