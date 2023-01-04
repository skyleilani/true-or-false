import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuestionCounter from './QuestionCounter';
import Buttons from './Buttons';

/* GenerateEquation
    - Displays an equation and a proposed answer to the equation.
    - Has "True" and "False" buttons to allow the user to indicate 
      if they think the proposed answer is correct or not.
    - Contains a counter for number of correct answers. 
    - Contains a counter for the total number of questions asked and displays this to the user.
 When the user clicks either button, a new equation is generated after a short delay. */
const GenerateEquation = () => {
  // State to store the three values of the equation and the operator
  const [value1, setValue1] = useState(Math.floor(Math.random() * 10));
  const [value2, setValue2] = useState(Math.floor(Math.random() * 10));
  const [value3, setValue3] = useState(Math.floor(Math.random() * 10));
  const [operator, setOperator] = useState(Math.random() < 0.5 ? '+' : '-');

  // State to store the proposed answer to the equation
  const [proposedAnswer, setProposedAnswer] = useState(null);

  // State to store the total number of questions asked and number of correct answers
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);

  // Calculate the true answer to the equation
  const trueAnswer =
    operator === '+' ? value1 + value2 + value3 : value1 - value2 - value3;

  useEffect(() => {
    // Generate a proposed answer that is either correct or close to correct
    if (Math.random() < 0.9) {
      // Correct answer
      setProposedAnswer(trueAnswer);
    } else {
      // Close to correct answer
      setProposedAnswer(trueAnswer + Math.floor(Math.random() * 3) - 1);
    }
  }, [value1, value2, value3, operator, trueAnswer]);

  // Event handler for when "True" button is clicked
  const handleTrueClick = () => {
    // Increment total number of questions asked
    setTotal(total + 1);

    // If proposed answer is correct, increment number of correct answers
    if (proposedAnswer === trueAnswer) {
      setCorrect(correct + 1);
    }

    // Wait 1 second before generating a new equation
    setTimeout(() => {
      setValue1(Math.floor(Math.random() * 10));
      setValue2(Math.floor(Math.random() * 10));
      setValue3(Math.floor(Math.random() * 10));
      setOperator(Math.random() < 0.5 ? '+' : '-');
    }, 1000);
  };

  // Event handler for when "False" button is clicked
  const handleFalseClick = () => {
    // Increment total number of questions asked
    setTotal(total + 1);

    // If proposed answer is incorrect, increment number of correct answers
    if (proposedAnswer !== trueAnswer) {
      setCorrect(correct + 1);
    }

    // Wait 1 second before generating a new equation
    setTimeout(() => {
      setValue1(Math.floor(Math.random() * 10));
      setValue2(Math.floor(Math.random() * 10));
      setValue3(Math.floor(Math.random() * 10));
      setOperator(Math.random() < 0.5 ? '+' : '-');
    }, 1000);
  };

  return (
    <div className='generate-equation'>
      {/* Display total number of questions asked and number of correct answers */}
      <QuestionCounter total={total} correct={correct} />
      <div className='m-32 p-10 justify-center text-center  h-32 '>
        {/* Display equation and proposed answer */}
        <p className='text-3xl'>
          {value1} {operator} {value2} {operator} {value3} ={' '}
          {/* Animate color of proposed answer based on if correct or not */}
          <motion.span
            initial={{ color: 'purple' }}
            animate={{ color: proposedAnswer === trueAnswer ? 'green' : 'red' }}
            transition={{ duration: 1 }}
            className='text-purple-500'
          >
            {proposedAnswer}
          </motion.span>
        </p>
      </div>
      {/* Display the "True" and "False" buttons and pass in the event handlers as props */}
      <Buttons onTrue={handleTrueClick} onFalse={handleFalseClick} />
    </div>
  );
};

export default GenerateEquation;
