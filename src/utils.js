export const random = (min = 0, max = 101) => Math.floor(Math.random() * (max - min)) + min;

export const pair = (first, second) => select => (select === 'first' ? first : second);
export const first = f => f('first');
export const second = f => f('second');
