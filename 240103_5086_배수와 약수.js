readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});


let input = [];
readline.on('line', (line) => {
  input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', () => {
  for (const [a, b] of input) {
    if (a === 0 && b === 0) {break;}
    if (b % a === 0) {
      console.log('factor');
    } else if (a % b === 0) {
      console.log('multiple');
    } else {
      console.log('neither');
    }
  }
});