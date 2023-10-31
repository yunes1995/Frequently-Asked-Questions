import React, { useState } from 'react';

// + or - icons
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info }) => {

  const [showInfo, setShowInfo] = useState(false);
  
  const showDataHandler = () => {
    setShowInfo(!showInfo)
  }

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={showDataHandler}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
