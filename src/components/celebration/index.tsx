import styles from "./index.module.css";

export function Celebration() {
  return (
    <div className={styles.container}>
      <h1>Yay! 🎉</h1>

      <img
        src="https://media.tenor.com/hryzNuX8Q1EAAAAj/happy-happy-cat-happy-happy-happy-cat.gif"
        alt="Happy cat"
        width="200"
      />
    </div>
  );
}
