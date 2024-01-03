readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {    
    let t = parseInt(input[0]);
    for(let i = 1; i < t+1; i++) {
        console.log(`${input[i][0]}${input[i][input[i].length-1]}`);
    }
})