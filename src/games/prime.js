import gameConstructor from '..';
import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const prime = num;
  if (prime === 2) {
    return true;
  }

  for (let i = 2; i < prime; i += 1) {
    if (prime % i === 0) {
      return false;
    }
  }

  return true;
};


const prime = () => {
  const question = generateNumber(2, 20);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameConstructor(gameDescription, prime);
