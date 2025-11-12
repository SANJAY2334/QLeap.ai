import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#0B0C10]/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-[#1F2833] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-[#C5C6C7]">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-white hover:text-[#66FCF1] transition"
        >
          QLeap<span className="text-[#66FCF1]">.ai</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#66FCF1] hover:text-[#45A29E] transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-8 text-sm font-medium transition-all ${
            open
              ? "absolute top-16 left-0 w-full bg-[#0B0C10]/95 flex flex-col items-center space-y-5 py-6"
              : "hidden md:flex"
          }`}
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setOpen(false)}
                className={`transition ${
                  location.pathname === to
                    ? "text-[#66FCF1]"
                    : "text-[#C5C6C7] hover:text-[#45A29E]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
