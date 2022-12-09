let rand = Math.random().toFixed(1);
let iterNum = 0;

for (let i = 0;; i++) {
    if (rand == '0.7') break;
    iterNum++;
}
console.log(`Loop was finished because of: ${rand}`);
console.log(`Number of iterations: ${iterNum}`);