import { useState } from "react";
export default function Accordion({ languages }) {
  const [isopen, setClicked] = useState(true);
  const Clickedbt = () => {
    setClicked(!isopen);
  };
  const openedItem = 0;

  const openedIt = languages.id === openedItem;
  return (
    <>
      <div className="buttoncontainer">
        {languages.map((t, index) => (
          <button
            onClick={Clickedbt}
            type="button"
            key={t.id}
            className="btn btn-warning"
          >
            {t.title}
          </button>
        ))}
      </div>
      <div className={`content${isopen ? "open" : ""} card`}>
        <div className=" card-body">
          {languages.map((t) => (
            <p className="card-text" key={t.id}>
              {t.description}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
