readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    console.log(line.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, 'a').length);

});