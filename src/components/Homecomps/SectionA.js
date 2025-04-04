import React, { useLayoutEffect, useState, useRef } from "react";
import './SectionA.css'

const SectionA = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true); // New state for cursor visibility
  const fullName = "Ashish Gtm";
  const typingInterval = useRef(null);

  useLayoutEffect(() => {
    let currentIndex = 0;
    typingInterval.current = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval.current);
        setShowCursor(false); // Hide cursor when typing completes
      }
    }, 200);

    return () => {
      if (typingInterval.current) {
        clearInterval(typingInterval.current);
      }
    };
  }, [fullName]);

  return (
    <div className="portfolio-header">
      <div className="design-text">Design. Develop. Deliver</div>
      <div className="portfolio-title">PORTFOLIO</div>
      <div className="name-text">
        {displayedName}
        {showCursor && <span className="cursor">|</span>} {/* Conditional rendering */}
      </div>
      <div className="scroll-down">
        <div className="scroll-down-icon"></div>
      </div>
    </div>
  );
};

export default SectionA;