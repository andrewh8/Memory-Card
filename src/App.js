import React, { useState } from 'react';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import { countContext } from './components/Context';
import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1)
  }

  const restartGame = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
  }

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <countContext.Provider value={{ incrementCurrentScore, restartGame }}>
        <GameBoard 
          setCurrentScore={setCurrentScore} 
          incrementScore={incrementCurrentScore} 
          restartGame={restartGame}/>
      </countContext.Provider>
    </div>
  );
}

export default App;