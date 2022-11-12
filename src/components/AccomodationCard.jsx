import Background from "../img/accomodation-card-bg.png";
import { Link } from "react-router-dom";

function AccomodationCard({ title, id, cover }) {
  return (
    <Link style={{ textDecoration: "none" }} to={"/accomodation/" + id}>
      <div
        className="accomodation-card__content"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "col",
            alignItems: "end",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 100%)",
          }}
        >
          <p className="accomodation-card__title">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default AccomodationCard;
