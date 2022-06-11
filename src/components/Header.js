import React, { useState } from 'react';
import './Header.css';

function Header(props) {
  return (
    <div className='Header'>
      <div id='title'>
        Memory Cards
      </div>
      <div>
        Current Score: {props.currentScore}
      </div>
      <div>
        Best Score: {props.bestScore}
      </div>
    </div>
  );
}

export default Header;