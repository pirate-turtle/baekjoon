readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})


readline.on("line", (line) => {
  let [a, b, c] = line.split(' ').map(el => parseInt(el)).sort((a, b) => a - b);
  
  if (a + b > c) {
    console.log(a + b + c);
  } else {
    console.log(2 * (a + b) - 1);
  }
  readline.close();
});