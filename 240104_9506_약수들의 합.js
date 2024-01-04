readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});


let input = [];
readline.on('line', (line) => {
  input.push(parseInt(line));
}).on('close', () => {
  // 입력이 -1이 아닌 동안
  let i = 0;
  while (input[i] !== -1) {
    // 약수를 저장할 배열을 만든다
    let divisor = [];

    // 약수의 합을 저장할 변수를 만든다
    let sum = 0;

    // 1부터 n 전까지 수를 증가시키면서 약수를 찾는다
    for (let num = 1; num < input[i]; num++) {
      if (input[i] % num === 0) {
        // 약수면 배열에 저장
        divisor.push(num);

        // 약수의 합 누적
        sum += num;
      }   
    }

    // 완전수인지 판단한다
    if (sum === input[i]) {
      // 완전수이면 약수들의 합 출력
      console.log(`${input[i]} = ${divisor.join(' + ')}`);
    } else {
      // 완전수가 아니면 n is NOT perfect 출력
      console.log(`${input[i]} is NOT perfect.`);
    }

    i++;
  }
  
  
})