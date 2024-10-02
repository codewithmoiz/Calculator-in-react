import React from 'react';

const Button = (props) => {
  function getValue(event) {
    const text = event.target.textContent;
    props.onButtonClick(text);
  }

  return (
    <button onClick={getValue}>{props.text}</button>
  );
};

export default Button;