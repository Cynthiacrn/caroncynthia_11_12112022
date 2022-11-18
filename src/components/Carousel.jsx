import { useState } from "react";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pictureSize = () => {
    const carouselPicture = document.querySelector(".carousel__container img");
    if (!carouselPicture) {
      return 0;
    }
    return carouselPicture.width;
  };

  const onNext = () => {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel__container"
        style={{ transform: `translateX(-${currentIndex * pictureSize()}px)` }}
      >
        {pictures.map((picture, index) => (
          <img
            alt="appartement"
            src={picture}
            key={index}
            className="carousel__img"
          />
        ))}
      </div>
      <div className={"carousel__controls"}>
        <img
          src="/img/icons/chevron-left.svg"
          className="chevron"
          onClick={onPrev}
          alt="chevron left"
        />
        <img
          src="/img/icons/chevron-right.svg"
          className="chevron"
          onClick={onNext}
          alt="chevron right"
        />
      </div>
    </div>
  );
}

export default Carousel;
