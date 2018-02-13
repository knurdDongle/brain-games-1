import { random, pair } from '../utils';
import { gameFlow } from '..';

const taskMessage = 'Answer "yes" if number is even otherwise answer "no"';
const game = () => {
  const question = random();
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return pair(question, correctAnswer);
};

export default () => gameFlow(taskMessage, game);
