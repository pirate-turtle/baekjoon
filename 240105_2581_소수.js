const { type } = require('os');

readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});


const isPrime = function (num) {
  // 1이면 소수 아님
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++){
    // 2부터 제곱근까지 약수 있는지 확인
    // 약수 있으면 소수 아님
    if (num % i === 0) {
      return false;
    }
  }

  // 약수 없으면 소수
  return true;
}


let input = [];
readline.on('line', (line) => {
  input.push(parseInt(line));
}).on('close', () => {
  // m부터 n까지 숫자 배열을 생성한다  
  let nums = Array.from(Array(input[1] - input[0] + 1), (_, i) => i + input[0]);

  // 소수만 남긴다
  nums = nums.filter(el => isPrime(el));
  
  if (nums.length > 0) {
    // 소수가 있는 경우 첫째줄에 합을, 둘째줄에 최솟값을 출력한다
    let sum = nums.reduce((prev, cur) => prev + cur, 0);
    console.log(sum);
    console.log(nums[0]);
  } else {
    // 소수가 없는 경우 -1을 출력한다
    console.log(-1);
  }

  
});