readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', (line) => {
    input = line.split(' ').map(el => parseInt(el));
    readline.close();
}).on('close', () => {
    console.log(input[0] * input[1]);
});