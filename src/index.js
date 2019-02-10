import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const congratulations = (userName) => {
  console.log(`Congratulations, ${userName}`);
};

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const userAnwer = question => readlineSync.question(`Question: ${question} `);

const rounds = 3;

const gameConstructor = (gameRules, game) => {
  welcome();
  console.log(`${gameRules}`);
  const userName = askName();
  for (let i = 0; i < rounds; i += 1) {
    const gameСontent = game();
    const question = car(gameСontent);
    const correctAnswer = cdr(gameСontent);
    const answer = userAnwer(question);
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

export default gameConstructor;
