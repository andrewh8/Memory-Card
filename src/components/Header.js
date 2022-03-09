import React, { useState } from 'react';

function Header(props) {
  return (
    <div className='Header'>
      {props.currentScore}
      {props.bestScore}
    </div>
  );
}

export default Header;