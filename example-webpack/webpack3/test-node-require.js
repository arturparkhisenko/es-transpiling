// node test-node-require.js

const magicTower = require('./dist/magic-tower');

console.log('magicTower', magicTower);

console.log('magicTower.cast(\'avadakedavra\')', magicTower.cast('avadakedavra'));

console.log('magicTower.getWizardName()', magicTower.getWizardName());
