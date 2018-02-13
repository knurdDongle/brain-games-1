import { random, pair } from '../utils';
import { gameFlow } from '..';

const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  return a > b ? gcd(a - b, b) : gcd(a, b - a);
};

const taskMessage = 'Find the greatest common divisor of given numbers.';
const game = () => {
  const num1 = random(1, 101);
  const num2 = random(1, 101);

  return pair(`${num1} ${num2}`, String(gcd(num1, num2)));
};

export default () => gameFlow(taskMessage, game);
