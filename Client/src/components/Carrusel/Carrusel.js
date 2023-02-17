import "./styles.css";

const Slider = ({ imgs }) => {
  return (
    <div className="slides">
      <div className="slide">
        <img src={imgs[0]} alt="Img-1" className="slide_img" />
      </div>
      <div className="slide slide__2">
        <img src={imgs[1]} alt="Img-2" className="slide_img" />
      </div>
      <div className="slide slide__3">
        <img src={imgs[2]} alt="Img-3" className="slide_img" />
      </div>
    </div>
  );
};

export default Slider;
