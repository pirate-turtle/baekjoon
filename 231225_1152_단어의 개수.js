readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    let words = line.trim().split(' ');
    let answer = 0;

    for (const word of words) {
        if (word) {
            answer += 1;
        }
    }

    console.log(answer);

    readline.close();
});