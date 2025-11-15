import PropTypes from "prop-types";

const Footer = ({ background = "bg-bg-dark", textColor = "text-white", links = [], className = "" }) => {
  return (
    <footer className={`${background} ${textColor} py-6 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        {links.length > 0 && (
          <div className="flex gap-4">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:underline hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  background: PropTypes.string,
  textColor: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};

export default Footer;
