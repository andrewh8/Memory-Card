import React, { useState } from 'react';
import Card from './Card';
import './GameBoard.css';

function GameBoard(props) {
	const [cards, setCards] = useState(['A', 'Z', 'S', 'I', 'V', 'M', 'Q', 'X', 'K'])

	const shuffleCards = () => {
		const newCards = cards.slice();
		for (let i = 0; i < cards.length; i++) {
			const j = Math.floor(Math.random()*cards.length);
			let temp = newCards[i];
			newCards[i] = newCards[j];
			newCards[j] = temp;
		}
		setCards(newCards);
	}

	const [wasReset, setWasReset] = useState(false);

	return (
		<div className='GameBoard'>
			{cards.map((card) => {
				return (
					<Card 
						key={card} 
						card={card}
						wasReset={wasReset}
						setWasReset={setWasReset}
						shuffleCards={shuffleCards} 
						setCurrentScore={props.setCurrentScore} 
						incrementCurrentScore={props.incrementCurrentScore} 
						restartGame={props.restartGame}/>
				)
			})}
		</div>
	);
}

export default GameBoard;