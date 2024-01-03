readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line)=>{
    let [a, b, c] = line.split(' ').map((el) => parseInt(el));
    console.log(a + b + c);
    readline.close();
});