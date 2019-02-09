import {
  gameConstructor, userAnwer, rounds,

  generateNumber, isEven, askName, congratulations,
} from '..';


const brainEven = () => {
  const userName = askName();
  for (let i = 0; i < rounds; i += 1) {
    const question = generateNumber();
    const answer = userAnwer(question);
    console.log(`Your answer: ${answer}`);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  congratulations(userName);
};

export default () => gameConstructor('Answer "yes" if number even otherwise answer "no".', brainEven);
