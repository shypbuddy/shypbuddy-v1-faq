import { Key } from "react";
import Accordion from "./Accordion";


function MapComponents({data}:{data : any}) {
    return (
        <>
         <div className="divide-y divide-slate-200">
          {data.map((item: { question: string; answer: any[]; subquestion:string; }, index: Key | null | undefined) => (
            <Accordion
            key={index}
            question={item.question ?? item.subquestion}
            id={`faqs-${index}`}
          >
            {/* Check if item.answer exists and is an object */}
            {item.answer &&
              typeof item.answer === "object" &&
              // If it's an object, map over each subAnswer
              item.answer.map((subAnswer: { subquestion: any ; subanswer: any }, subIndex : any) => (
                <ul key={subIndex} className="list-disc pl-5 text-justify">
                    <li >
                    <b>{subAnswer.subquestion?.toUpperCase()} </b>
                    {subAnswer.subanswer}
                  </li>
                </ul>
              ))}
            {/* If item.answer is not an object, display it directly */}
            {typeof item.answer !== "object" && <p>{item.answer}</p>}
          </Accordion>
          ))}
        </div>
        </>
    );
}


export default MapComponents;