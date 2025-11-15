import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({
  logo,
  links = [],
  background = "bg-primary",
  textColor = "text-white",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${background} ${textColor} ${className} px-6 py-4`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {logo && <img src={logo} alt="Logo" className="h-8 w-auto" />}
          <span className="font-bold text-lg">MyCompany</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-2 px-4">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="block py-2 hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  background: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};

export default Navbar;
