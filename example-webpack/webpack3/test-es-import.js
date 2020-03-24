import * as indexDefault from './dist/index';
import {
  empty,
  generateName,
  getRandomQuote,
  zombieFactory,
  zombie
} from './dist/index';

console.log('indexDefault.generateName()', indexDefault.generateName());
console.log('generateName()', generateName());
console.log('getRandomQuote()', getRandomQuote());
console.log('zombieFactory()', zombieFactory());
console.log('zombie.generateName()', zombie.generateName());
