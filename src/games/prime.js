import { random, pair } from '../utils';
import { gameFlow } from '..';


const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  const iter = (div) => {
    if (div === 1) {
      return true;
    } else if (n % div === 0) {
      return false;
    }

    return iter(div - 1);
  };

  return iter(Math.floor(Math.sqrt(n)));
};

const taskMessage = 'Is this number prime? ';
const game = () => {
  const question = random();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return pair(question, correctAnswer);
};

export default () => gameFlow(taskMessage, game);
