import { useEffect, useState } from "react";
import styles from "./index.module.css";

export function Invitation({
  setIsClicked,
}: {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isMoved, setIsMoved] = useState(false);

  return (
    <div className={styles.container}>
      <p>
        <strong className={styles.name}>Ominakhon</strong>, would you like to go
        with me on Astana ball?
      </p>
      <div className={styles.buttons}>
        <button
          className={styles.buttonCancel}
          onMouseOver={() => setIsMoved(!isMoved)}
          style={{
            transform: isMoved ? "translate(80px)" : "translate(0)",
          }}
        >
          No
        </button>
        <button
          className={styles.buttonAccept}
          onClick={() => setIsClicked(true)}
          style={{
            transform: isMoved ? "translate(-80px)" : "translate(0)",
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
}
