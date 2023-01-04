import React from 'react';

const QuestionCounter = ({ total, correct }) => {
  return (
    <div className='m-10'>
      <p>Questions: {total}</p>
      <p>Correct: {correct}</p>
    </div>
  );
};

export default QuestionCounter;
