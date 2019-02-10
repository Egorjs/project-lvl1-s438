import gameConstructor from '..';
import { cons } from 'hexlet-pairs';
import { generateNumber, generateOperation, getOperation } from '../assistant';

const brainCalc = () => {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const question = generateOperation(num1, num2);
  const correctAnswer = String(getOperation(question, num1, num2));
  return cons(question, correctAnswer);
};

export default () => gameConstructor('Answer "yes" if number even otherwise answer "no".', brainCalc);
