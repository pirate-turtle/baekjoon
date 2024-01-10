readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})


readline.on("line", (line) => {
  let n = parseInt(line);
  let answer = 0;
  for (let i = 1; i < n+1; i++) {
    // 분해합을 구한다
    let sum = i;
    let num = i;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    // 분해합이 n과 일치하면 현재 수를 저장하고 반복문을 종료한다
    if (sum === n) {
      answer = i;
      break;
    }
  }
  // 생성자가 있는지 판단한다
  if (answer === n) {
    // 생성자가 없으면 0 출력
    console.log(0);
  } else {
    // 생성자가 있으면 출력
    console.log(answer);
  }
});