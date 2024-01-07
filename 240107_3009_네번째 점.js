readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
readline.on('line', (line) => {
  input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', () => {
  countX = {}
  countY = {}

  for (const [x, y] of input) {
    countX[x] = (countX[x] || 0) + 1;
    countY[y] = (countY[y] || 0) + 1;
  }

  let answer = [];
  for (const x in countX) {
    if (countX[x] === 1) {
      answer.push(x);
    }
  }

  for (const y in countY) {
    if (countY[y] === 1) {
      answer.push(y);
    }
  }

  console.log(answer.join(' '));
});