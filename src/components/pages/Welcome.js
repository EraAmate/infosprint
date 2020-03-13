import React from 'react';
import './Welcome.css';
import Button from '../Button';
// import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <h3>
        follow the coolest topics all around Japan and anime with info ninja
      </h3>
      <div className="welcPage">
        <Button className="welcBtn" />
        <Button className="welcBtn" />
        <Button className="welcBtn" />
        <Button className="welcBtn" />
      </div>
    </>
  );
}
export default Welcome;
