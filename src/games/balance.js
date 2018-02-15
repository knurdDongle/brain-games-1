import { random, pair } from '../utils';
import { gameFlow } from '..';


const balance = (n) => {
  const list = String(n).split('').map(x => Number(x));
  const iter = (acc) => {
    const newAcc = acc.sort();
    if (newAcc[newAcc.length - 1] - newAcc[0] <= 1) {
      return newAcc.join('');
    }

    newAcc[0] += 1;
    newAcc[newAcc.length - 1] -= 1;
    return iter(newAcc);
  };

  return iter(list);
};

const taskMessage = 'Balance the given number.';
const game = () => {
  const num = random(100, 1000);
  return pair(`${num}`, balance(num));
};

export default () => gameFlow(taskMessage, game);
