import { random, pair } from '../utils';
import { gameFlow } from '..';


const taskMessage = 'What number is missing in this progression?';

const arithmProgression = (initialValue, dif) => n => initialValue + (dif * (n - 1));

const game = () => {
  const prog = arithmProgression(random(0, 31), random(1, 31));
  const blankSpot = random(1, 11);
  const correctAnswer = String(prog(blankSpot));

  const getProgressionStr = (i = 1, acc = '') => {
    if (i >= 11) {
      return acc;
    } else if (i === blankSpot) {
      return getProgressionStr(i + 1, `${acc} ..`);
    }

    return getProgressionStr(i + 1, `${acc} ${String(prog(i))}`);
  };

  const question = getProgressionStr();
  return pair(question, correctAnswer);
};

export default () => gameFlow(taskMessage, game);
