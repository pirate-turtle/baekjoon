readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.on('line', (line) => {
    let num = Number(line);

    for (let i = 1; i <= 9; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
    
    readline.close();
})