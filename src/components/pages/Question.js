import React from 'react';
import './Question.css';
import Card from '../Card';

function Question() {
  return (
    <>
      <div className="questionPage">
        <Card>
          <p className="cardTitle">Add your favourite anime</p>
          <form className="add-inputs-form">
            <input type="text" className="input" placeholder=" anime name " />
            <input type="text" className="input" placeholder=" anime image " />
            <input
              type="text"
              className="input"
              placeholder=" anime synopsis "
            />
          </form>
        </Card>
      </div>
    </>
  );
}

export default Question;
