import React from "react";
import NavSidebar from "./NavSidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layouts() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <NavSidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <main className="flex-grow-1 p-4" style={{ background: "#f8f9fa" }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default Layouts;
