import { random, pair } from '../utils';
import { gameFlow } from '..';

const balance = (n) => {
  const l = String(n).length;
  const getNumbersSum = (numberAsStr, i = 0, sum = 0) => {
    if (i >= l) {
      return sum;
    }
    const newSum = sum + Number(numberAsStr[i]);
    return getNumbersSum(numberAsStr, i + 1, newSum);
  };

  const sum = getNumbersSum(String(n));
  const unit = Math.floor(sum / l);

  const getBalancedNumber = (num, i, rem) => {
    if (i >= l) {
      return String(num);
    }
    const addOne = rem > 0 ? 1 : 0;
    const newDigit = ((unit + addOne) * (10 ** i));
    const newNum = num + newDigit;
    const newRem = rem > 0 ? rem - 1 : 0;
    return getBalancedNumber(newNum, i + 1, newRem);
  };

  return getBalancedNumber(0, 0, sum - (unit * l));
};

const taskMessage = 'Balance the given number.';
const game = () => {
  const num = random(100, 999);
  return pair(`${num}`, String(balance(num)));
};

export default () => gameFlow(taskMessage, game);
