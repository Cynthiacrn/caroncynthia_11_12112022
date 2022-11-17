import { useState } from "react";

function Dropdown({ name, text }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className="dropdown__container">
      <div className="dropdown__header" onClick={handleOpen}>
        <p className="dropdown__name">{name}</p>
        {open ? (
          <img
            className="dropdown__icon"
            alt="chevron up icon"
            src="/img/icons/chevron-up.svg "
          />
        ) : (
          <img
            className="dropdown__icon"
            alt="chevron down icon"
            src="/img/icons/chevron-down.svg "
          />
        )}
      </div>
      {open ? (
        <div className="dropdown__text">{text}</div>
      ) : (
        <div className="dropdown__text--inactive"></div>
      )}
    </div>
  );
}
export default Dropdown;
