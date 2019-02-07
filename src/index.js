import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');

export const askName = () => {
  console.log(`Hello, ${userName}!`);
};


// const number = Math.round(Math.random() * (100 - 1 + 1) + 1);

// const answer = readlineSync.question(`Question: ${number} `);

// console.log(`Your answer: ${answer}`)

// const correctAnswer = answer % 2 === 0 ? 'yes' : 'no'


	
// const logic = () => {
// 	for (let i = 0; i < 3; i++) {
// 		if (answer !== correctAnswer) {
// 		return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
// 	}
// 		if (answer === correctAnswer) {
// 			console.log('Correct!');
// 		}	
// 	}
	
// }; 
