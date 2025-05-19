import Accordian from "./Accordion";
import data from "../data.json";

export default function Faq() {
  console.log(data);

  return (
    <div>
      <h1>Faq's</h1>
      {data.faqs.map((obj, index) => {
        return <Accordian qna={obj} />;
      })}
    </div>
  );
}
