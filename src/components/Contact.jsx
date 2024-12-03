import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <h1>{"Contact Us"}</h1>
      <p>
        <b>Phone:</b> 314-159-2653
        <br></br>
        <b>E-mail:</b> snowysagoodgirl@gmail.com
        <br></br>
        <b>Github:</b> <a href="https://github.com/ADDikt88">github/ADDikt88</a>
      </p>
      <h2>Terms of Service</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br></br>
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        <br></br>
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        <br></br>
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        <br></br>
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <h2>Privacy Policy</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br></br>
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        <br></br>
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        <br></br>
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        <br></br>
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <Link to="/">
        <h3>You can go back to the home page by clicking here...</h3>
      </Link>
    </div>
  );
};

export default ContactUs;
