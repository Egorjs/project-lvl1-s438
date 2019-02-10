import gameConstructor from '..';
import { cons, car, cdr } from 'hexlet-pairs';
import generateNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  let progression = '';
  let progressionItem = 0;
  const progressionStart = start;
  const progressionStep = step;
  const progressionLength = length;
  const missingItem = generateNumber(1, 10);
  let hiddenItem = 0;
  for (let i = 1; i < progressionLength + 1; i += 1) {
    if (i === missingItem) {
      hiddenItem = progressionStart + (i - 1) * progressionStep;
      progressionItem = '..';
    } else {
      progressionItem = progressionStart + (i - 1) * progressionStep;
    }
    progression += `${progressionItem} `;
  }
  return cons(progression, hiddenItem);
};

const brainProgression = () => {
  const startProgression = generateNumber(1, 10);
  const stepProgression = generateNumber(1, 3);
  const lengthProgression = 10;
  const data = generateProgression(startProgression, stepProgression, lengthProgression);
  const question = car(data);
  const correctAnswer = cdr(data);
  return cons(question, String(correctAnswer));
};

export default () => gameConstructor(gameDescription, brainProgression);
