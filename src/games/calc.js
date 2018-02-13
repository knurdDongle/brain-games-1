import { random, pair } from '../utils';
import gameFlow from './game-flow';

const taskMessage = 'What is the result of the expression?';
const game = () => {
  const operation = random(0, 3);
  const a = random();
  const b = random();

  if (operation === 0) {
    return pair(`${a} + ${b}`, String(a + b));
  } else if (operation === 1) {
    return pair(`${a} - ${b}`, String(a - b));
  }
  const multiplier = 2 + (b % 8);
  return pair(`${a} * ${multiplier}`, String(a * multiplier));
};

export default () => gameFlow(taskMessage, game);
