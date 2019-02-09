import {
  gameConstructor, userAnwer, rounds, generateOperation,
  getOperation, generateNumber, askName, congratulations,
} from '..';

const brainCalc = () => {
  const userName = askName();
  for (let i = 0; i < rounds; i += 1) {
    const num1 = generateNumber();
    const num2 = generateNumber();
    const question = generateOperation(num1, num2);
    const answer = userAnwer(question);
    console.log(`Your answer: ${answer}`);
    const correctAnswer = getOperation(question, num1, num2);
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  congratulations(userName);
};

export default () => gameConstructor('Answer "yes" if number even otherwise answer "no".', brainCalc);
