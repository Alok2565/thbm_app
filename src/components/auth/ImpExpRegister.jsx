import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import authLogo from "../../assets/images/auth_icmr_logo.png";
import CaptchaComponent from './CaptchaComponent';
import { Helmet } from 'react-helmet';
import { useProject } from '../ProjectContext';

function ImpExpRegister() {
    const { title } = useProject();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [iec_code, setIecCode] = useState("");
    const [isIecSubmitted, setIsIecSubmitted] = useState(false);

    const [captchaText, setCaptchaText] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [error, setError] = useState('');

    const [name, setName] = useState("");
    const [name_ofCPerson, setCPersonName] = useState("");
    const [designation, setDesignation] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [mobile_number, setMobileNumber] = useState("");
    const [email, setemail] = useState("");

    const handleIecSubmit = (event) => {
        event.preventDefault();
        if (iec_code.length === 10) {
            setIsIecSubmitted(true);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        if (captchaInput !== captchaText) {
            setError('Invalid Captcha. Please try again.');
            return;
        }

        setValidated(true);

        const data = {
            iec_code,
            name,
            name_ofCPerson,
            designation,
            address,
            address2,
            city,
            state,
            pincode,
            mobile_number,
            email
        };

        console.log("Form Data:", data);
        // Example: Call API here
        // fetch('/api/register', { method: 'POST', body: JSON.stringify(data) })

        // Navigate or reset form
        alert('Registration successful!');
        navigate('/thank-you');
    };

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`Register | ${title}`}</title>
            </Helmet>
            <Row>
                <Col md={{ span: 12, offset: 0 }}>
                    <Col className="codex-authbox register mt-5 mb-5">
                        <Col className="auth-header p-2">
                            <Col className="d-flex justify-content-center align-items-center">
                                <Link to="#">
                                    <img
                                        className="img-fluid light-logo"
                                        src={authLogo}
                                        width="100%"
                                        style={{ maxWidth: "400px" }}
                                        alt="logo"
                                    />
                                </Link>
                            </Col>
                            <h5 className="justify-content-between text-center mb-3" style={{ fontWeight: "600" }}>
                                Registration Form for Applicant
                            </h5>
                        </Col>

                        {!isIecSubmitted && (
                            <Form noValidate onSubmit={handleIecSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12">
                                        <Form.Label>
                                            Importer-Exporter Code (IEC) <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="IEC Code"
                                            value={iec_code}
                                            onChange={(e) => setIecCode(e.target.value)}
                                            maxLength={10}
                                        />
                                    </Form.Group>
                                    <Col className="col-md-12">
                                        <Form.Group className="py-2 d-flex">
                                            <button
                                                id="show_record"
                                                disabled={iec_code.length !== 10}
                                                className="btn btn-primary btn-md m-1 show_hide_btn px-4 font-bold"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                            <button
                                                id="reset_data"
                                                className="btn btn-primary btn-md m-1 show_hide_btn px-4 font-bold"
                                                type="button"
                                                onClick={() => setIecCode("")}
                                            >
                                                Reset
                                            </button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        )}

                        {isIecSubmitted && (
                            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12 py-2">
                                        <Form.Label>Importer-Exporter Code (IEC) <span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            value={iec_code}
                                            onChange={(e) => setIecCode(e.target.value)}
                                            placeholder="IEC Code"
                                            readOnly />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="py-2">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" readOnly />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <Form.Label>Name of Contact Person <span className="text-danger">*</span></Form.Label>
                                        <Form.Control required type="text" value={name_ofCPerson} onChange={(e) => setCPersonName(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <Form.Label>Designation of Contact Person <span className="text-danger">*</span></Form.Label>
                                        <Form.Control required type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control required type="text" value={address} onChange={(e) => setAddress(e.target.value)} readOnly />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <Form.Label>Address2</Form.Label>
                                        <Form.Control type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} readOnly />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control required type="text" value={city} onChange={(e) => setCity(e.target.value)} readOnly />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control required type="text" value={state} onChange={(e) => setState(e.target.value)} readOnly />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <Form.Label>PinCode</Form.Label>
                                        <Form.Control required type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} readOnly />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <Form.Label>Email Address</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                                            <Form.Control type="email" required value={email} onChange={(e) => setemail(e.target.value)} readOnly />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control required type="text" value={mobile_number} onChange={(e) => setMobileNumber(e.target.value)} readOnly />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <Form.Label className="d-flex gap-3">Enter Captcha <span className="text-danger">*</span><CaptchaComponent onChangeCaptcha={setCaptchaText} onRefresh={() => {
                                            setCaptchaInput(''); setError('');
                                        }} /></Form.Label>
                                        <Form.Control type="text"
                                            value={captchaInput}
                                            onChange={(e) => setCaptchaInput(e.target.value)}
                                            maxLength={6}
                                            required />

                                        {error && <p style={{ color: 'red' }}>{error}</p>}
                                    </Form.Group>

                                    {/* 

                                    <Form.Group as={Col} md="6" className="py-2" controlId="captchaInput">
                                        <Form.Label>Enter Captcha</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={captchaInput}
                                            onChange={(e) => setCaptchaInput(e.target.value)}
                                            maxLength={6}
                                            required
                                        />
                                    </Form.Group>

                                    {error && <p style={{ color: 'red' }}>{error}</p>} */}
                                </Row>

                                <Row>
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <span className="text-danger">* Please fill all mandatory fields</span>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="py-2">
                                        <Button type="submit">Register</Button>
                                    </Form.Group>
                                </Row>
                            </Form>
                        )}
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default ImpExpRegister;
