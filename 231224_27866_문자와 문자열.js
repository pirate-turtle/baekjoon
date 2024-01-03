readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let s = input[0];
    let i = parseInt(input[1]);

    console.log(s[i-1]);
})