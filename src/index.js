import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const logic = () => {
  welcome();
  const userName = askName();
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * (100 - 1 + 1) + 1);
    const answer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${answer}`);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\r\nLet's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};

export { welcome, askName, logic };
