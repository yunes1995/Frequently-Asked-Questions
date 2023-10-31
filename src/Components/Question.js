import React, { useState } from 'react';
import ShowtoggleHandler from '../HOCs/ShowtoggleHandler';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info , showInfo , showDataHandler}) => {
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

export default ShowtoggleHandler(Question);
