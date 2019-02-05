var readlineSync = require('readline-sync');

const askName = () => {
var userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
}
export default askName;