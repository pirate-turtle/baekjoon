readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.on('line', (line) => {
    console.log(`${Number(line) - 543}`)
    readline.close();
});