import readlineSync from 'readline-sync';
import { getName, random } from '.';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number is even otherwise answer "no"');
const name = getName();

const startGame = (count = 0) => {
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const number = random();
  console.log(`Question: ${number}`);

  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer: ');

  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log('Correct!');
  startGame(count + 1);
};

export default startGame;
