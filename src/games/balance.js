import { random, pair } from '../utils';
import { gameFlow } from '..';

const getNumbersSum = (numberAsStr, i = 0, sum = 0) => {
  if (i >= numberAsStr.length) {
    return sum;
  }

  const newSum = sum + Number(numberAsStr[i]);
  return getNumbersSum(numberAsStr, i + 1, newSum);
};

const balance = (n) => {
  const sum = getNumbersSum(String(n));
  const l = String(n).length;
  const unit = Math.floor(sum / l);

  const makeNumber = (num, i) => {
    if (i === 0) {
      return num;
    }

    const newNum = num + (unit * (10 ** (i - 1)));
    return makeNumber(newNum, i - 1);
  };

  const makeReminder = (rem, i) => {
    if (i === 0) {
      return rem;
    }

    const newRem = rem + (10 ** (i - 1));
    return makeReminder(newRem, i - 1);
  };

  return String(makeNumber(0, l) + makeReminder(0, sum - (unit * l)));
};

const taskMessage = 'Balance the given number.';
const game = () => {
  const num = random(100, 999);
  return pair(`${num}`, String(balance(num)));
};

export default () => gameFlow(taskMessage, game);
