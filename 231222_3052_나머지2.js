readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let answer = new Set(input.map(el => parseInt(el) % 42)).size;
    console.log(answer);
})