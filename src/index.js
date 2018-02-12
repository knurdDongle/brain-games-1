import readlineSync from 'readline-sync';

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const random = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;
