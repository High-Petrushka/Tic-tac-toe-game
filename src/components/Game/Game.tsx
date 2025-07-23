import styles from "./Game.module.scss";

import Field from '../Field/Field.tsx';
import GameTitle from "../GameTitle/GameTitle.tsx";
import { useState } from "react";

export default function Game() {
  const [curPlayer, setCurPlaer] = useState(1);
  return (
    <>
      <div className={styles.cont}>
        <GameTitle title={curPlayer} />
        <Field />
      </div>
    </>
  );
}
