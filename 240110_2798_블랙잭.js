readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})


let input = [];
readline.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [n, m] = input[0].split(" ").map(el => parseInt(el));
  let cards = input[1].split(" ").map(el => parseInt(el));
  let answer = 0;

  for (let i = 0; i < n-2; i++) {
    for(let j = i+1; j < n-1; j++) {
      for(let k = j+1; k < n; k++) {
        // 카드 3장의 합을 구한다
        let sum = cards[i] + cards[j] + cards[k];

        // 이전 합보다 크고 m보다 작은 경우 합을 저장한다
        if (sum > answer && sum <= m) {
          answer = sum;
        }
        
      }
    }
  }


  // 최종 합을 출력한다
  console.log(answer);
  readline.close();
})