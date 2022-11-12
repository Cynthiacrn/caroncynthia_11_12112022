import { Link } from "react-router-dom";

function AccomodationCard({ title, id, cover }) {
  return (
    <Link style={{ textDecoration: "none" }} to={"/accomodation/" + id}>
      <div
        className="accomodation-card__content"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="accomodation-card__gradient">
          <p className="accomodation-card__title">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default AccomodationCard;
