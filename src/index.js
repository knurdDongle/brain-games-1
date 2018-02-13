import readlineSync from 'readline-sync';
import { first, second } from './utils';


export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  return name;
};

export const gameFlow = (taskMessage, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(taskMessage);
  console.log();
  const name = getName();

  const startGame = (count = 0) => {
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const gameData = game();
    const question = first(gameData);
    const correctAnswer = second(gameData);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    startGame(count + 1);
  };

  startGame();
};
