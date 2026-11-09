import { add, mul } from './src.js';
if (add(2, 3) !== 5) { console.error('add(2,3) !== 5'); process.exit(1); }
if (mul(4, 3) !== 12) { console.error('mul(4,3) !== 12'); process.exit(1); }
console.log('ok');
