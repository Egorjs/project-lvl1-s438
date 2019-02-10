import gameConstructor from '..';
import { cons } from 'hexlet-pairs';
import { generateNumber } from '../assistant';

const brainEven = () => {
  const question = generateNumber();
  const isEven = number => number % 2 === 0;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameConstructor('Answer "yes" if number even otherwise answer "no".', brainEven);
