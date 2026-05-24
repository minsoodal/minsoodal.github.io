import React, { useState } from "react";
import { typewriterSentence } from "../data/site.js";

export default function TypewriterText({ text = typewriterSentence }) {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState("typing");

  React.useEffect(() => {
    let timeoutId;
    const typingSpeed = 68;
    const deletingSpeed = 34;
    const pauseWhenComplete = 1500;
    const pauseWhenEmpty = 450;

    if (phase === "typing") {
      if (displayText.length < text.length) {
        timeoutId = window.setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeoutId = window.setTimeout(() => setPhase("deleting"), pauseWhenComplete);
      }
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        timeoutId = window.setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        timeoutId = window.setTimeout(() => setPhase("typing"), pauseWhenEmpty);
      }
    }

    return () => window.clearTimeout(timeoutId);
  }, [displayText, phase, text]);

  return (
    <div className="typewriter-wrap" aria-label={text}>
      <p className="typewriter-kicker">I am interested in ... </p>
      <h1 className="typewriter-text">
        <span aria-hidden="true">{displayText}</span>
        <span className="typewriter-cursor" aria-hidden="true" />
      </h1>
    </div>
  );
}
