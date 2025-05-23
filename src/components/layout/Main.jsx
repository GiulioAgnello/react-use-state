import { useState } from "react";
import Accordion from "../variables/Accordion";
import Paragraf from "../variables/Paragraf";

// export
export default function Main({ languages }) {
  const [isopen, setIsOpen] = useState(false);
  const handleItemClick = () => {
    setIsOpen(!isopen);
  };

  return (
    <>
      <div className="buttoncontainer">
        {languages.map((t) => (
          <Accordion onclick={handleItemClick} title={t.title} key={t.id} />
        ))}
      </div>
      <div className={`content${isopen ? "open" : ""} card`}>
        {languages.map((t) => (
          <Paragraf key={t.id} description={t.description} />
        ))}
      </div>
    </>
  );
}
