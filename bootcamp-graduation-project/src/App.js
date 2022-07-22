import "./App.css";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Home from "./components/pages/Home";

import { Toaster } from "react-hot-toast";

import { Routes, Route } from "react-router-dom";

import ContactMe from "./components/pages/ContactMe";
import Footer from "./components/Footer";
import AboutMe from "./components/pages/AboutMe";
import Register from "./components/Register";
import Login from "./components/Login";
import MyAccount from "./components/pages/MyAccount";
import ForgotPassword from "./components/pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <BootstrapNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="resetpassword" element={<ForgotPassword />} />
        <Route path="myaccount" element={<MyAccount />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
