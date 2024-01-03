readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let count = parseInt(input[0]);
    let numbers = [...input[1]].map(el => parseInt(el))
                    .reduce((acc, cur) => acc + cur, 0);
    console.log(numbers);
});