import styles from "./Menu.module.scss";

export default function Menu({ handleStart }) {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.cont__text}>
          <h1 className={styles.title}>Tic Tac Toe<br />Game</h1>
          <p>press the button to get started!</p>
        </div>
        <div className={styles.cont__btn}>
          <button onClick={() => handleStart()}>Start</button>
        </div>
      </div>
    </>
  );
}
