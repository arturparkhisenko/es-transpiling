import empty from './empty';
import zombieFactory from './zombie';
import * as zombie from './zombie';
import { getRandomQuote } from './zombie';
import { generateName } from './zombie';
export { empty, generateName, getRandomQuote, zombieFactory, zombie };
export default { empty: empty, generateName: generateName, getRandomQuote: getRandomQuote, zombieFactory: zombieFactory, zombie: zombie };
