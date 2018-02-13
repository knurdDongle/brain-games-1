import { random, pair } from '../utils';
import gameFlow from './game-flow';

const balance = (n) => {
  const l = String(n).length;
  const getNumbersSum = (numberAsStr, i = 0, sum = 0) => (i < l ?
    getNumbersSum(numberAsStr, i + 1, sum + Number(numberAsStr[i])) : sum);

  const sum = getNumbersSum(String(n));
  const unit = Math.floor(sum / l);

  const getBalancedNumber = (num, i, rem) => {
    if (i >= l) {
      return String(num);
    }
    const newNum = num + ((unit + (rem > 0 ? 1 : 0)) * (10 ** i));
    return getBalancedNumber(newNum, i + 1, rem > 0 ? rem - 1 : 0);
  };

  return getBalancedNumber(0, 0, sum - (unit * l));
};

const taskMessage = 'Balance the given number.';
const game = () => {
  const num = random(100, 999);
  return pair(`${num}`, String(balance(num)));
};

export default () => gameFlow(taskMessage, game);
