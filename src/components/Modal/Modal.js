import React from "react";
import { Transition, CSSTransition } from "react-transition-group";
import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};
const modal = (props) => {
  return (
    //   Transitions events are helpful for staggered animations for example
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      onEnter={() => console.log("onEnter")}
      onEntering={() => console.log("onEntering")}
      onEntered={() => console.log("onEntered")}
      onExit={() => console.log("onExit")}
      onExiting={() => console.log("onExiting")}
      onExited={() => console.log("onExited")}
      classNames="fade-slide"
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
