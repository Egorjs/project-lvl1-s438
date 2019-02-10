import gameConstructor from '..';
import { cons } from 'hexlet-pairs';
import { greatestDivisor, generateNumber } from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const num1 = generateNumber(1, 50);
  const num2 = generateNumber(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(greatestDivisor(num1, num2));
  return cons(question, correctAnswer);
};

export default () => gameConstructor(gameDescription, gcd);
