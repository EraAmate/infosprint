import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <>
      <h3>
        follow the coolest topics all around Japan and anime with info ninja
      </h3>
      <div className="welcPage">
        <button className="welcBtn">anime list</button>
        <button className="welcBtn">network </button>
        <button className="welcBtn">news</button>
        <button className="welcBtn">something else</button>
      </div>
    </>
  );
}
export default Welcome;
