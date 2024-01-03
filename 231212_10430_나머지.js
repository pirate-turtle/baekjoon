readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.on('line', (line) => {
    let [a, b, c] = line.split(' ').map(el => Number(el));
    
    console.log((a + b) % c);
    console.log(((a % c) + (b % c)) % c);
    console.log((a * b) % c);
    console.log(((a % c) * (b % c)) % c);

    readline.close();
})