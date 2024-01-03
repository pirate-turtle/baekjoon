const { parse } = require('path');

readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});


let input = [];
readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  input = input.map(el => parseInt(el));

  for (let i = 1; i < parseInt(input[0]) + 1; i++) {
    let change = input[i];

    // 쿼터의 개수를 구한다 25센트
    let quarter = parseInt(change / 25);
    // 남은 거스름돈을 구한다
    change %= 25;
  
    // 다임의 개수를 구한다 10센트
    let dime = parseInt(change / 10);
    // 남은 거스름돈을 구한다
    change %= 10;
  
    // 니켈의 개수를 구한다 5센트
    let nickel = parseInt(change / 5);
    // 남은 거스름돈을 구한다
    change %= 5;
  
    // 남은 거스름돈이 페니의 수이다
    let penny = change;
  
    // 각 동전의 개수를 출력한다
    console.log(quarter, dime, nickel, penny);
  }

});