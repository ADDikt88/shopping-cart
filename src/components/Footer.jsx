import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Snowy's Board Game Emporium. All rights reserved.</p>
      <p>
        <Link to="/contact">Terms of Service</Link> |{" "}
        <Link to="/contact">Privacy Policy</Link> |{" "}
        <Link to="/contact">Contact Us</Link>
      </p>
    </footer>
  );
};

export default Footer;
