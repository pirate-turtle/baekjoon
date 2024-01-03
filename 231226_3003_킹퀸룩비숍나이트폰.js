readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    let pieces = [1, 1, 2, 2, 2, 8]
    let answer = line.split(' ').map(el => parseInt(el)).reduce((acc, cur, i) => [...acc, pieces[i] - cur], []);

    console.log(answer.join(' '));

    readline.close();
});