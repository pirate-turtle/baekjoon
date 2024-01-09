readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})


readline.on("line", (line) => {
  let n = parseInt(line);
  console.log(n * n);
  console.log(2);
});