readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let count = parseInt(input[0]);
  let minX = minY = 10000;
  let maxX = maxY = -10000;

  // 입력에서 최댓값과 최솟값 구하기
  for (let i = 1; i < count + 1; i++) {
    let [x, y] = input[i].split(' ').map(el => parseInt(el));
    minX = x < minX ? x : minX;
    maxX = x > maxX ? x : maxX;
    minY = y < minY ? y : minY;
    maxY = y > maxY ? y : maxY;
  }

  // (x 최대값 - x 최솟값) * (y 최대값 - y 최솟값)
  console.log((maxX - minX) * (maxY - minY));
})