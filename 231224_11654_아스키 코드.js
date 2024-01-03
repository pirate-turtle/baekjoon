readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.on('line', (line) => {
    console.log(line.charCodeAt(0));
    readline.close();
})