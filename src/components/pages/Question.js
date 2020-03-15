import React from 'react';
import './Question.css';
import Card from '../Card';
import DirectBtn from '../DirectBtn';

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
            <button className="btn">Submit</button>
            <DirectBtn className="btn" name="back to menu" destination="/" />
          </form>
        </Card>
      </div>
    </>
  );
}

export default Question;
