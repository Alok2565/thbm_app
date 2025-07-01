import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MainLogo from '../assets/images/satyam-dark.png';
import RightLogo from '../assets/images/Indian_Council_of_Medical_Research_Logo.svg';
import { Button, Col } from 'react-bootstrap';


function Header() {
    return (
        <>
            <Col className="bg-light border-bottom py-2" style={{ borderTop: "2px solid #00aeff" }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left: Main Logo */}
                        <div className="col-12 col-md-3 text-center text-md-start mb-2 mb-md-0 d-flex align-items-center gap-2">
                            <img
                                src={MainLogo}
                                alt="Main Logo"
                                height="90"
                            />
                            <Link className="mt-3 text-dark text-start text-decoration-none" to="/">
                                <span className="d-block text-dark">
                                    <strong>स्वास्थ्य अनुसंधान विभाग</strong><br />
                                    Department of Health Research
                                </span>
                            </Link>
                        </div>

                        {/* Center: Project Name */}
                        <div className="col-12 col-md-6 text-center mb-2 mb-md-0">
                            <h4 className="mb-0 text-dark">Transfer of Human Biological Material (THBM)</h4>
                        </div>

                        {/* Right: Secondary Logo + Phone */}
                        <div className="col-12 col-md-3 text-center text-md-end">
                            <div className="d-inline-flex align-items-center gap-2">
                                <img
                                    src={RightLogo}
                                    alt="Secondary Logo"
                                    height="80"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>

            {/* Main Navigation */}
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#022759", borderBottom: "1px solid white" }}>
                <div className="container">
                    {/* Toggler Button */}
                    <Button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Button>

                    {/* Navbar Content */}
                    <div className="collapse navbar-collapse" id="mainNavbar">
                        {/* Left Side Menu */}
                        <ul className="navbar-nav me-auto gap-5">
                            <li className="nav-item">
                                <NavLink to="/" end className="nav-link text-white">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about-us" className="nav-link text-white">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="#" className="nav-link text-white">User Manual</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact-us" className="nav-link text-white">Contact Us</NavLink>
                            </li>
                        </ul>

                        {/* Right Side Dropdown */}
                        <ul className="navbar-nav ms-auto gap-2">
                            {/* <li className="nav-item dropdown"><Button className="btn btn-light dropdown-toggle">
                                Register
                            </Button>
                                <ul className="dropdown-menu dropdown-menu-end bg-dark" aria-labelledby="userDropdown">
                                    <li><Link className="dropdown-item text-white" to="/profile">Profile</Link></li>
                                    <li><Link className="dropdown-item text-white" to="/settings">Settings</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item text-white" to="/logout">Logout</Link></li>
                                </ul>
                            </li> */}
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Register
                                </button>
                                <ul className="dropdown-menu custom-dropdown-menu" style={{ backgroundColor: "#022759" }}>
                                    <li>
                                        <Link className="dropdown-item text-white" to="/register?role=imp-exp">
                                            Importer/Exporter
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </button>
                                <ul className="dropdown-menu custom-dropdown-menu" style={{ backgroundColor: "#022759" }}>
                                    <li className="link-items"><Link className="dropdown-item text-white border-bottom border-1 border-light" to="imp-exp/login">Import/Export Login</Link></li>
                                    <li className="link-items"><Link className="dropdown-item text-white border-bottom border-1 border-light" to="icmr/login">ICMR Official</Link></li>
                                    <li className="link-items"><Link className="dropdown-item text-white" to="committee/login">Committee Member</Link></li>
                                </ul>
                            </div> */}
                            <div className="dropdown">
                                <button
                                    className="btn btn-light dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Login
                                </button>
                                <ul
                                    className="dropdown-menu custom-dropdown-menu"
                                    style={{ backgroundColor: '#022759' }}
                                >
                                    <li className="link-items">
                                        <Link
                                            className="dropdown-item text-white border-bottom border-1 border-light"
                                            to="/login?role=imp-exp"
                                        >
                                            Import/Export Login
                                        </Link>
                                    </li>
                                    <li className="link-items">
                                        <Link
                                            className="dropdown-item text-white border-bottom border-1 border-light"
                                            to="/login?role=icmr"
                                        >
                                            ICMR Official
                                        </Link>
                                    </li>
                                    <li className="link-items">
                                        <Link
                                            className="dropdown-item text-white"
                                            to="/login?role=committee"
                                        >
                                            Committee Member
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
