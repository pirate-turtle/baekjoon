readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.on('line', (line) => {
    console.log(line.length);
    readline.close();
})