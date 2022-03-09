import React, { useState, useContext } from 'react';
import { countContext } from './Context';

function Card(props) {
  const { incrementCurrentScore, restartGame } = useContext(countContext);
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    if (wasClicked === false){
      setWasClicked(true)
      incrementCurrentScore();
    } else {
      restartGame();
      setWasClicked(false);
    }
    props.shuffleCards();
  }

  return (
    <div onClick={handleClick} className='Card'>
      {props.card}
      ___
      {`${wasClicked}`}
		</div>
  )
}

export default Card;