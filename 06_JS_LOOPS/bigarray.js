//  deno run loops_test.js

const bigArray = Array.from({ length: 10_000_000 }, (_, i) => i);

// Measure time for a normal for loop
console.time("for loop");
let sum1 = 0;
for (let i = 0; i < bigArray.length; i++) {
  sum1 += bigArray[i];
}
console.timeEnd("for loop");

// Measure time for for...of loop
console.time("for...of loop");
let sum2 = 0;
for (const num of bigArray) {
  sum2 += num;
}
console.timeEnd("for...of loop");

// Measure time for forEach
console.time("forEach loop");
let sum3 = 0;
bigArray.forEach(num => {
  sum3 += num;
});
console.timeEnd("forEach loop");
