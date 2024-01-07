readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', (line) => {
  let [x, y, w, h] = line.split(' ').map(el=> parseInt(el));
  console.log(Math.min(x, y, w-x, h-y));
});