import React from 'react';
import './Button.css';

function Button(props) {
  return <button className={props.className} {...props} />;
}

export default Button;
