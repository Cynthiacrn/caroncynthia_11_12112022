import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import StarRating from "../components/StarRating";
import Error from "../pages/Error";

function Accommodation() {
  const { id } = useParams();
  const [accomodations, setAccomodations] = useState([]);
  const accomodation = accomodations.find(
    (accomodation) => accomodation.id === id
  );
  console.log(accomodation);

  useEffect(() => {
    fetch("/data/accomodations.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAccomodations(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="page">
      {accomodation ? (
        <div>
          <Carousel pictures={accomodation.pictures} />
          <div className="accomodation__description-container">
            <div className="accomodation__description-header">
              <div className="accomodation__description-left">
                <h2 className="accomodation__description-title">
                  {accomodation.title}
                </h2>
                <p className="accomodation__description-location">
                  {accomodation.location}
                </p>
                <ul className="accomodation__description-tag-container">
                  {accomodation.tags.map((tag, index) => (
                    <li className="accomodation__description-tag" key={index}>
                      <Tag tag={tag} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="accomodation__description-right">
                <div className="accomodation__description-host-container">
                  <p className="accomodation__description-name">
                    {accomodation.host.name}
                  </p>
                  <div className="accomodation__description-picture-container">
                    <img
                      className="accomodation__description-picture"
                      alt={accomodation.host.name}
                      src={accomodation.host.picture}
                    />
                  </div>
                </div>
                <StarRating rating={accomodation.rating} />
              </div>
            </div>
          </div>
          <div className="accomodation__description-footer">
            <Dropdown name="Description" text={accomodation.description} />
            <Dropdown
              name="??quipements"
              text={accomodation.equipments.map((equipement, index) => (
                <li
                  className="accomodation__description-equipement"
                  key={index}
                >
                  {equipement}
                </li>
              ))}
            />
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Accommodation;
