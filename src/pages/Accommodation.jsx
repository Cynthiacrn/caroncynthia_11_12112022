import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";

function Accommodation() {
  const { id } = useParams();
  const [accomodations, setAccomodations] = useState([]);
  const accomodation = accomodations.find(
    (accomodation) => accomodation.id === id
  );

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
      });
  }, [accomodations]);

  return (
    <div className="page">
      {accomodation && (
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
              </div>
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
            </div>
          </div>
          <div>
            <ul className="accomodation__description-tag-container">
              {accomodation.tags.map((tag, index) => (
                <li className="accomodation__description-tag" key={index}>
                  <Tag tag={tag} />
                </li>
              ))}
            </ul>
          </div>
          <div className="accomodation__description-footer">
            <Dropdown name="Description" text={accomodation.description} />
            <Dropdown
              name="Équipements"
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
      )}
    </div>
  );
}

export default Accommodation;
