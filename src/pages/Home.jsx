import { useState, useEffect } from "react";
import Banner from "../img/home-banner.png";
import AccomodationCard from "../components/AccomodationCard";

function Home() {
  const [accomodations, setAccomodations] = useState([]);

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
    <div className="page home__container">
      <div
        className="home__header"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <ul className="home__body--container">
        {accomodations.map((accomodation) => (
          <li className="home__body--card" key={accomodation.id}>
            <AccomodationCard
              title={accomodation.title}
              id={accomodation.id}
              cover={accomodation.cover}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
