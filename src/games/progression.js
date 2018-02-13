import { random, pair } from '../utils';
import { gameFlow } from '..';

const taskMessage = 'What number is missing in this progression?';
const game = () => {
  const initialValue = random(0, 31);
  const dif = random(1, 31);
  const blankSpot = random(1, 11);
  const correctAnswer = String(initialValue + (dif * blankSpot));

  const getQuestionStr = (val, i, acc) => {
    if (i >= 11) {
      return acc;
    } else if (i === blankSpot) {
      return getQuestionStr(val + dif, i + 1, `${acc} ..`);
    }

    return getQuestionStr(val + dif, i + 1, `${acc} ${String(val)}`);
  };
  console.log(initialValue);
  const question = getQuestionStr(initialValue, 1, '');
  return pair(question, correctAnswer);
};

export default () => gameFlow(taskMessage, game);
