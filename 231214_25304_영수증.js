readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];

readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let total = 0;

    // 총 금액 x를 숫자로 변환한다
    let x = parseInt(input[0]);

    // 물건 종류의 수 n을 숫자로 변환한다
    let n = parseInt(input[1]);

    // 물건 종류별로 액수를 계산해서 더한다
    for(let i=2; i < n+2; i++) {
        let [price, count] = input[i].split(' ').map((el) => parseInt(el));
        total += price * count;
    }

    // 총 금액과 일치하면 Yes, 일치하지 않으면 No를 출력한다
    console.log(total == x ? 'Yes' : 'No');
    readline.close();
});