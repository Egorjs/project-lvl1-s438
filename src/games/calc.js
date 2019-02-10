import gameConstructor from '..';
import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';

const gameDescription = 'What is the result of the expression?';

const brainCalc = () => {
  const num1 = generateNumber(1, 10);
  const num2 = generateNumber(1, 10);
  const random = generateNumber(1, 3);
  let question = '';
  let correctAnswer = 0;
  switch (random) {
    case 1:
      question = `${num1} + ${num2}`;
      correctAnswer = num1 + num2;
      break;
    case 2:
      question = `${num1} - ${num2}`;
      correctAnswer = num1 - num2;
      break;
    default:
      question = `${num1} * ${num2}`;
      correctAnswer = num1 * num2;
  }
  return cons(question, String(correctAnswer));
};

export default () => gameConstructor(gameDescription, brainCalc);
