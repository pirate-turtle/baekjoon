readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = []

readline.on('line', (line) => {
    input = line.split(' ').map((el) => parseInt(el));
    readline.close();
}).on('close', () => {
    const a = input[0];
    const b = input[1];

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(Math.floor(a / b));
    console.log(a % b);
});