readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // n: 총 n개의 바구니가 있음
    // m: 앞으로 m회 공을 바꿀것임
    let [n, m] = input[0].split(' ').map(el => parseInt(el));

    // 바구니 n개 만들기. 바구니 번호와 같은 공 넣기
    let basket = Array.from({length: n}, (_, i) => i+1);

    // m회 동안
    for (let count=1; count < m+1; count++){
        let [i, j] = input[count].split(' ').map(el => parseInt(el) - 1);

        // 두 바구니 안의 공을 교환한다
        // 임시 바구니를 만들어서 i번 바구니의 공을 옮겨둔다
        let tmp = basket[i];

        // j번 바구니의 공을 i번 바구니에 넣는다
        basket[i] = basket[j];

        // 임시 바구니의 공을 j번 바구니에 넣는다
        basket[j] = tmp;
    }

    // 바구니 출력하기
    console.log(basket.join(' '));
})