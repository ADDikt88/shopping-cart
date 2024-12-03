import { Link } from "react-router-dom";
const Slide = ({ image, title, description, link }) => {
  return (
    <div className="slide">
      <img src={image} alt={title} className="slide-image" />
      <Link to={link}>
        <div className="slide-content">
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Slide;
