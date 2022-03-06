import React from 'react';

function Card2(props) {
  return (
    <div onClick={props.clickHandler} className='Card'>
      Two
      {props.isClicked}
      {console.log(props.isClicked)}
    </div>
  );
}

export default Card2;