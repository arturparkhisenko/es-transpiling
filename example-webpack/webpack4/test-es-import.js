import * as MT from './dist/magic-tower';
import {cast} from './dist/magic-tower';
import {getWizardName} from './dist/magic-tower';

console.log('MT.cast(\'avadakedavra\')', MT.cast('avadakedavra'));

console.log('MT[\'magicTower\'].cast()', MT['magicTower'].cast());

console.log('cast(\'dunno\')', cast('dunno'));

console.log('getWizardName()', getWizardName());
