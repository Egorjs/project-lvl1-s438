import * as readlineSync from '../node_modules/readline-sync';

const askName = () => {
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
}
export default askName;