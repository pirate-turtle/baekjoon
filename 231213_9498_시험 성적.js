readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    let score = Number(line);

    if (90 <= score && score <= 100) {
        console.log('A');
    } else if (80 <= score) {
        console.log('B');
    } else if (70 <= score) {
        console.log('C');
    } else if (60 <= score) {
        console.log('D');
    } else {
        console.log('F');
    }

    readline.close();
})