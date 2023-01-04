import React from 'react';

const Buttons = ({ onTrue, onFalse }) => {
  return (
    <div className='text-center'>
      <button
        className='border border-emerald-200 rounded-3xl mx-5 p-2 px-5  bg-lime-300 hover:bg-lime-400 hover:border-lime-400 shadow-md'
        onClick={onTrue}
      >
        True
      </button>
      <button
        className='border border-rose-300 rounded-3xl mx-5 p-2 px-5 bg-red-300 hover:bg-red-400 hover:border-rose-400 shadow-md'
        onClick={onFalse}
      >
        False
      </button>
    </div>
  );
};

export default Buttons;
