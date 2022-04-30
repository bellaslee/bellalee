import '../assets/css/ScrollIndicator.css';
import React from "react";

function ScrollIndicator({ position }) {
  return (
    <div className="scroll-indicator">
      <span className="material-icons arrow-down">keyboard_arrow_down</span>
    </div>
  )
}

export default ScrollIndicator;