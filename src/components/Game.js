import React, { useState } from 'react';
import Card from './Card';
import Card2 from './Card2';

function Game() {

  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(true);
  };

  return (
    <div className='Game'>
      <Card clickHandler={clickHandler} isClicked={isClicked}/>
      <Card2 clickHandler={clickHandler} isClicked={isClicked}/>
    </div>
  );
}

export default Game;