readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    let [a, b] = line.split(' ');
    
    a = parseInt([...a].reverse().join(''));
    b = parseInt([...b].reverse().join(''));

    console.log(Math.max(a, b));

    readline.close();
});