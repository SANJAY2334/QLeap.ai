import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      {/* Global Layout */}
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0B0C10] via-[#1F2833] to-[#0B0C10] text-[#C5C6C7]">
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#1F2833",
              color: "#C5C6C7",
              border: "1px solid #45A29E",
            },
            success: {
              iconTheme: {
                primary: "#66FCF1",
                secondary: "#1F2833",
              },
            },
            error: {
              iconTheme: {
                primary: "#D72638",
                secondary: "#1F2833",
              },
            },
          }}
        />
      </div>
    </Router>
  );
};

export default App;
