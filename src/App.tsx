import { useState, useRef, useEffect } from "react";
import styles from "./App.module.css";
import { Celebration } from "./components/celebration";
import { Invitation } from "./components/invitation";
import Confetti from "react-confetti";
import { Fireworks } from "fireworks-js";

export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const containerRef = useRef(null);
  const fireworksRef = useRef<Fireworks | null>(null);

  useEffect(() => {
    if (!isClicked || !containerRef.current) return;

    const fireworks = new Fireworks(containerRef.current);
    fireworksRef.current = fireworks;
    fireworks.start();

    return () => {
      fireworks.stop();
      fireworksRef.current = null;
    };
  }, [isClicked]);

  return (
    <div ref={containerRef} className={styles.container}>
      {!isClicked ? (
        <Invitation setIsClicked={setIsClicked} />
      ) : (
        <>
          <Confetti />
          <Celebration />
        </>
      )}
    </div>
  );
}
