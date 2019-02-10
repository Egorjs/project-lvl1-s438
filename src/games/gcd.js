import gameConstructor from '..';
import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const greatestDivisor = (num1, num2) => {
  let param1 = num1;
  let param2 = num2;
  while (param1 !== param2) {
    if (param1 > param2) {
      param1 -= param2;
    } else {
      param2 -= param1;
    }
  }
  return param1;
};

const gcd = () => {
  const num1 = generateNumber(1, 50);
  const num2 = generateNumber(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(greatestDivisor(num1, num2));
  return cons(question, correctAnswer);
};

export default () => gameConstructor(gameDescription, gcd);
