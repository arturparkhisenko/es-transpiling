function getRandomQuote() {
  return Math.random() < 0.5 === true ? 'No guts, no gory.' : 'Me eat brains!';
}

export { getRandomQuote };

export function generateName(name = 'Ghoul') {
  return 'z' + name;
}

export default function zombieFactory() {
  return {
    name: generateName(),
    damage: 42,
    say: getRandomQuote
  };
}
