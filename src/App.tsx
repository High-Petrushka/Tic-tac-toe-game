import { useState } from 'react';

import './App.scss'

import Menu from './components/Menu/Menu.tsx';
import Game from './components/Game/Game.tsx';

function App() {
  const [started, setStarted] = useState(false);

  function handleStart(): void {
    setStarted(!started);
  }

  return (
    <>
      {
        started ? <Game /> :
          <Menu handleStart={handleStart} />
      }
    </>
  );
}

export default App
