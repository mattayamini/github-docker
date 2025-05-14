const assert = require('assert');
const greet = require('./index');

assert.strictEqual(greet('Node'), 'Hello, Node!');
console.log("✅ Test passed!");
