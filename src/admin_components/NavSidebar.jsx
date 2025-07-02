import React, { useState } from "react";
import adminHeaderLogo from "../assets/images/icmr_main_logo.png";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBIcon,
} from "cdbreact";
import { NavLink } from "react-router-dom";

function NavSidebar() {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  return (
    <CDBSidebar
      textColor="#fff"
      backgroundColor="#0a1d44"
      style={{ minHeight: "100vh" }}
    >
      <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="lg" />}>
        <a
          href="/"
          className="text-decoration-none"
          style={{ color: "inherit" }}
        >
          <img src={adminHeaderLogo} alt="Logo" width="155" />
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent>
        <CDBSidebarMenu>
          <NavLink to="/dashboard">
            <CDBSidebarMenuItem icon="columns">Dashboards</CDBSidebarMenuItem>
          </NavLink>

          <NavLink to="/home-banner">
            <CDBSidebarMenuItem icon="envelope">
              Home Banner Slider
            </CDBSidebarMenuItem>
          </NavLink>

          {/* ✅ Example parent with submenu */}
          <div>
            <div
              onClick={toggleSubmenu}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                padding: "12px 20px",
                color: "white",
              }}
            >
              <CDBIcon icon="users" className="me-2" />
              <span>Users</span>
              <CDBIcon
                icon={openSubmenu ? "angle-down" : "angle-right"}
                className="ms-auto"
              />
            </div>

            {openSubmenu && (
              <div style={{ paddingLeft: "40px" }}>
                <NavLink to="/users/list" className="text-decoration-none">
                  <div style={{ padding: "8px 0", color: "white" }}>
                    User List
                  </div>
                </NavLink>
                <NavLink to="/users/add" className="text-decoration-none">
                  <div style={{ padding: "8px 0", color: "white" }}>
                    Add User
                  </div>
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/reports">
            <CDBSidebarMenuItem icon="chart-bar">Reports</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
}

export default NavSidebar;
