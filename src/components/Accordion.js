import React, { useState, useRef } from "react";
import Chevron from "../components/Chevron";
import "./accordion.css";

const Accordion = props => {
  //const {projects} = props.project;
  console.log("Accordion");
  const { details } = props;
  console.log(details);

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };
  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
        <p className="accordion__title">{details.title}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="accordion__text" aria-hidden={!setActive}>
          <p className="panel__content">{details.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
