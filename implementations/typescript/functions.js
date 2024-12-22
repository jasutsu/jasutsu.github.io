"use strict";
function arrayMap(f) {
    return b => b.map(f);
}
const lengths = arrayMap(s => s.length);
const output_lengths = lengths(['hi', 'hello', 'sir']);
console.log(output_lengths); // [2, 5, 3]
