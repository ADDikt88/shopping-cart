import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <h1>{"Contact Us"}</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ContactUs;
