import { Col, Container, Row } from "react-bootstrap";
import HomeSlider from "../components/HomeSlider";
import { Helmet } from "react-helmet";
import { useProject } from "../components/ProjectContext";


function Home() {
    const { title } = useProject();
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`Home | ${title}`}</title>
            </Helmet>
            <div><HomeSlider /></div>
            <Col>
                <section className="introduction py-3">
                    <Container className="mt-3">
                        <Row>
                            <Col md={12}>
                                <div className="content-item">
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section >
            </Col>
        </>
    )

}
export default Home