import { useState } from "react";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prev() {
    console.log("test");
    if (currentIndex === pictures.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="carousel__container">
      <img
        className="carousel__chevron-left"
        alt="chevron left icon"
        src="/img/icons/chevron-left.svg "
        onClick={prev}
      />
      {pictures.map((picture, index) => (
        <div className="carousel__picture" key={index}>
          <img alt="appartement" src={picture} />
        </div>
      ))}
      <img
        className="carousel__chevron-right"
        alt="chevron right icon"
        src="/img/icons/chevron-right.svg "
      />
    </div>
  );
}

export default Carousel;
