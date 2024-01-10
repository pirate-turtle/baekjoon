readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})


readline.on("line", (line) => {
  let n = BigInt(line);
  console.log(`${n*n*n}`);
  console.log(3);
});