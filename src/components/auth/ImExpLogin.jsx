// src/components/ImExpLogin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Form, Row, Button, InputGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import authLogo from '../../assets/images/auth_icmr_logo.png';
import { useProject } from '../ProjectContext';
import CaptchaComponent from './CaptchaComponent';

function ImExpLogin() {
    const { title } = useProject();
    const [validated, setValidated] = useState(false);
    const [iec_code, setIecCode] = useState('');
    const [password, setPassword] = useState('');
    const [captchaText, setCaptchaText] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [error, setError] = useState('');


    const handleChnage = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            handleLogin();
        }
        if (captchaInput !== captchaText) {
            setError('Invalid Captcha. Please try again.');
            return;
        }

        setValidated(true);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            console.log('imp-exp login:', { iec_code, password });
            // navigate('/imp-dashboard'); // redirect after success
        }

        setValidated(true);
    };
    return (
        <>
            <Container className="py-3">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`Login | ${title}`}</title>
                </Helmet>

                <Col className="codex-authbox login mt-4 mb-4 mx-auto" md={6}>
                    <Col className="auth-header p-2">
                        <Col className="d-flex justify-content-center align-items-center mb-3">
                            <Link to="#">
                                <img
                                    className="img-fluid light-logo"
                                    src={authLogo}
                                    alt="logo"
                                    style={{ maxWidth: '400px' }}
                                />
                            </Link>
                        </Col>
                        <h5 className="text-center mb-3"><strong>Login for Importer/Exporter</strong></h5>
                    </Col>
                    <Form noValidate validated={validated} onSubmit={handleChnage}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustomEmail">
                                <Form.Label>Importer/Exporter Code (IEC Code)</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        name="iec_code"
                                        value={iec_code}
                                        onChange={(e) => setIecCode(e.target.value)}
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupPassword">
                                <Form.Label className="d-flex justify-content-between">
                                    Password
                                    <Link
                                        to="/forgot-password-link?role=imp-exp"
                                        className="text-end"
                                        style={{ fontSize: '14px', textDecoration: 'none' }}
                                    >
                                        Forgot Password
                                    </Link>
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <CaptchaComponent onChangeCaptcha={setCaptchaText} onRefresh={() => {
                            setCaptchaInput(''); setError('');
                        }} />

                        <Form.Group className="mb-3" controlId="captchaInput">
                            <Form.Label>Enter Captcha</Form.Label>
                            <Form.Control type="text" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)}
                                maxLength={6} required />
                        </Form.Group>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Col>
                            <Button type="submit" variant="primary" className="w-100">
                                Login
                            </Button>

                        </Col>
                        <h6 class="mt-2" style={{ color: "#8392a5" }}>Don't have an account? <Link class="text-primary" to="/register?role=imp-exp">Register Here</Link></h6>
                        <h6><Link
                            to="/reset-password?role=imp-exp"
                            className="text-start"
                            style={{ fontSize: '14px', textDecoration: 'none' }}
                        >
                            Reset Password
                        </Link></h6>
                    </Form>
                </Col>
            </Container>
        </>
    )
}
export default ImExpLogin
