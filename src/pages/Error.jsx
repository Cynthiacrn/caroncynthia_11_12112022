import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="page error__container">
      <div className="error__content">
        <p className="error__status">404</p>
        <p className="error__desrciption">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link to={"/"} style={{ color: "#FF6060", fontSize: "18px" }}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
