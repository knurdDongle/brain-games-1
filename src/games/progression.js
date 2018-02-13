import { random, pair } from '../utils';
import { gameFlow } from '..';

const taskMessage = 'What number is missing in this progression?';
const game = () => {
  const initialValue = random(0, 31);
  const dif = random(1, 31);
  const blankSpot = random(1, 11);
  const correctAnswer = String(initialValue + (dif * blankSpot));

  const getQuestionStr = (val, i, acc) => {
    if (i >= 10) {
      return acc;
    } else if (i === blankSpot) {
      return getQuestionStr(val + dif, i + 1, `${acc} ..`);
    }

    return getQuestionStr(val + dif, i + 1, `${acc} ${String(val)}`);
  };

  const question = getQuestionStr(initialValue + dif, 1, String(initialValue));
  return pair(question, correctAnswer);
};

export default () => gameFlow(taskMessage, game);
