readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // n: 바구니 수
    // m: 공 넣는 횟수
    let [n, m] = input[0].split(' ').map(el => parseInt(el));

    // 공이 없는 빈 바구니 n개를 생성한다
    let basket = new Array(n).fill(0);

    // m회 동안
    for (let count=1; count < m+1; count++) {
        let [i, j, k] = input[count].split(' ').map(el => parseInt(el));

        // i부터 j번 바구니까지
        for (let idx = i-1; idx < j; idx++) {
            // k번 공을 넣는다
            basket[idx] = k;
        }        
    }

    // 바구니를 출력한다
    console.log(basket.join(' '));
})