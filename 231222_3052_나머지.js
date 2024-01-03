readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let check = [];
    
    for (let i = 0; i < 10; i++) {
        let cal = parseInt(input[i]) % 42;

        if (check.indexOf(cal) === -1) {
            check.push(cal);
        }
    }

    console.log(check.length);
})