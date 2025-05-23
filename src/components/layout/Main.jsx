import Accordion from "../variables/Accordion";
import Paragraf from "../variables/Paragraf";
export default function Main({ languages }) {
  return (
    <>
      <div className="buttoncontainer">
        {languages.map((t) => (
          <Accordion title={t.title} key={t.id} />
        ))}
      </div>
      <div className="card">
        {languages.map((t) => (
          <Paragraf key={t.id} description={t.description} />
        ))}
      </div>
    </>
  );
}
