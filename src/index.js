import readlineSync from 'readline-sync';

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

const isEven = number => number % 2 === 0;

const generateNumber = () => {
  const number = Math.round(Math.random() * (100 - 1 + 1) + 1);
  return number;
};

const generateOperation = (num1, num2) => {
  let result = '';
  const random = generateNumber();
  if (random < 33) {
    result = `${num1} + ${num2}`;
  } else if (random > 33 && random < 66) {
    result = `${num1} - ${num2}`;
  } else {
    result = `${num1} * ${num2}`;
  }
  return result;
};

const getOperation = (str, num1, num2) => {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '+') {
      result = num1 + num2;
    } if (str[i] === '-') {
      result = num1 - num2;
    } if (str[i] === '*') {
      result = num1 * num2;
    }
  }
  return result;
};

const userAnwer = question => readlineSync.question(`Question: ${question} `);

const rounds = 3;

const gameConstructor = (gameRules, game) => {
  welcome();
  console.log(`${gameRules}`);
  game();
};

export {
  welcome, askName, generateOperation, getOperation, gameConstructor,
  rounds, userAnwer, generateNumber, isEven, congratulations,
};
