import gameConstructor from '..';
import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const brainEven = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameConstructor(gameDescription, brainEven);
