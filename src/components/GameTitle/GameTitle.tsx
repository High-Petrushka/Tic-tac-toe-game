import styles from './GameTitle.module.scss';

type GameTitleProps = {
  title: number;
}

export default function GameTitle(props: GameTitleProps) {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.title}>
          <h3>{props.title === 1 ? "First" : "Second"} Player's turn</h3>
        </div>
        <div className={styles.score}>
          <p>Player 1: </p>
          <p>Player 2: </p>
        </div>
      </div>
    </>
  );
}
