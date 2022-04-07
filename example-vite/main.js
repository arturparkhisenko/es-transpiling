import './style.css';

import {
  empty,
  generateName,
  getRandomQuote,
  zombieFactory,
  zombie,
} from '../src/index';

console.log(generateName());
console.log(getRandomQuote());
console.log(zombieFactory());
console.log(zombie);

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
