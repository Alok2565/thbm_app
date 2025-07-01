// import React from 'react';
// import './App.css';
// import '@fontsource/poppins';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import PageNotFound from './pages/PageNotFound';
// import LoginRouter from './components/auth/LoginRouter';
// import ImpExpRegister from './components/auth/ImpExpRegister';
// import ForgotPassword from './components/auth/ForgotPassword';
// import ForgotPasswordLink from './components/auth/ForgotPasswordLink';
// import ResetPassword from './components/auth/ResetPassword';
// {/* admin, imp-exp, icmr, committee */ }
// import Layouts from './admin_components/Layouts';
// import Dashboard from './admin_components/admin/Dashboard';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route exact path="about-us" element={<About />} />
//           <Route exact path="contact-us" element={<Contact />} />
//           <Route exact path="register" element={<ImpExpRegister />} />

//           <Route path="login" element={<LoginRouter />} />
//           <Route exact path="forgot-password" element={<ForgotPassword />} />
//           <Route exact path="forgot-password-link" element={<ForgotPasswordLink />} />
//           <Route exact path="reset-password" element={<ResetPassword />} />
//           <Route exact path="thank-you" element={<h5>Please click the password Generation link sent to your email Id to Complete the Registation Process</h5>} />
//           thank-you
//         </Route>

//         {/* Admin Layout */}
//         <Route path="/admin" element={<Layouts />}>
//           <Route path="dashboard" element={<h2>Admin Dashboard</h2>} />
//         </Route>
//         <Route path="*" element={<PageNotFound />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// ✅ All imports must be at the top
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import LoginRouter from './components/auth/LoginRouter';
import ImpExpRegister from './components/auth/ImpExpRegister';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordLink from './components/auth/ForgotPasswordLink';
import ResetPassword from './components/auth/ResetPassword';

// {/* admin, imp-exp, icmr, committee */ }
import Layouts from './admin_components/Layouts';
import Dashboard from './admin_components/admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="register" element={<ImpExpRegister />} />
          <Route path="login" element={<LoginRouter />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="forgot-password-link" element={<ForgotPasswordLink />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route
            path="thank-you"
            element={
              <h5>
                Please click the password generation link sent to your email ID
                to complete the registration process.
              </h5>
            }
          />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<Layouts />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* imp exp Layout */}
        <Route path="/imp-exp" element={<Layouts />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* Icmr Layout */}
        <Route path="/icmr" element={<Layouts />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* Committee Layout */}
        <Route path="/committee" element={<Layouts />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

