readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    let n = Number(line);
    let sum = 0;
    for (let i = 1; i < n + 1; i++) {
        sum += i;
    }

    console.log(sum);
    readline.close();
});