const ColoredStar = () => {
  return <span className="star">&#9733;</span>;
};

const EmptyStar = () => {
  return <span className="empty-star">&#9733;</span>;
};

function StarRating({ rating }) {
  return (
    <div className="star__rating">
      {Array.from({ length: parseInt(rating) }, (v, index) => (
        <ColoredStar key={"colored-" + index} />
      ))}
      {Array.from({ length: 5 - parseInt(rating) }, (v, index) => (
        <EmptyStar key={"empty-" + index} />
      ))}
    </div>
  );
}

export default StarRating;
