const Slide = ({ image, title, description }) => {
  return (
    <div className="slide">
      <img src={image} alt={title} className="slide-image" />
      <div className="slide-content">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

export default Slide;
