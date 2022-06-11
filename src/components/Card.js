import React, { useState, useContext, useEffect } from 'react';
import { countContext } from './Context';
import './Card.css';

function Card(props) {
  const { incrementCurrentScore, restartGame } = useContext(countContext);
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    if (wasClicked === false){
      setWasClicked(true)
      incrementCurrentScore();
    } else {
      restartGame();
      props.setWasReset(true);
    }
    props.shuffleCards();
  }

  useEffect(() => {
    if (props.wasReset === true) {
      setWasClicked(false);
      props.setWasReset(false);
    }
  }, [props]);

  return (
    <div onClick={handleClick} id='Card' className={`${props.card}`}>
		</div>
  )
}

export default Card;
