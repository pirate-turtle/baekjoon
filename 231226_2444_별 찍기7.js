readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    line = parseInt(line);
    // 삼각 별 1        
    for (let i = 0; i < line; i++) {
        // 공백 = line - 1 - i
        // 별 = i*2 + 1
        console.log(`${' '.repeat(line - 1 - i)}${'*'.repeat(i * 2 + 1)}`);
    }
    // 삼각 별 2
    for (let i = line - 2; i > -1; i--) {
        // 공백 = line - 1 - i
        // 별 = i * 2 + 1
        console.log(`${' '.repeat(line - 1 - i)}${'*'.repeat(i * 2 + 1)}`);
    }

    readline.close();
});