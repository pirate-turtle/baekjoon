readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})


readline.on("line", (line) => {
  let n = parseInt(line);
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  console.log(sum);
  console.log(2);
});