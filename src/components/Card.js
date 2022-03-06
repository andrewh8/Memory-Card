import React from 'react';

function Card(props) {
  return (
    <div onClick={props.clickHandler} className='Card'>
      One
      {props.isClicked}
      {console.log(props.isClicked)}
    </div>
  );
}

export default Card;