readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let isChulsuk = new Array(31).fill(false);

    for (let student of input) {
        student = parseInt(student);
        isChulsuk[student] = true;
    }

    for (let i = 1; i < 31; i++) {
        if (!isChulsuk[i]) {
            console.log(i);
        }
    }
})