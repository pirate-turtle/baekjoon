readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let input = [];
readline.on('line', (line) => {
    input.push(line);    
}).on('close', ()=>{
    // input[0]
    // n: 총 n개의 바구니
    // m: 역순으로 바꿀 횟수
    let [n, m] = input[0].split(' ').map(el => parseInt(el));
    // n개의 바구니를 생성한다
    let basket = Array.from({length: n}, (_, i) => i+1);    

    // input[1] ~ input[m]
    for (let x = 1; x < m+1; x++) {
        let [i, j] = input[x].split(' ').map(el => parseInt(el));

        // 인덱스를 맞추기 위해 -1
        i -= 1;
        j -= 1;

        // i번째 바구니부터 j번째 바구니의 순서를 역순으로 만든다
        // i + (j - i + 1) / 2 - 1 번 인덱스까지 스왑한다
        end = parseInt(i + (j - i + 1) / 2);
        while (i < end) {
            // tmp를 만들어 i번째 바구니의 원소를 담는다
            let tmp = basket[i];
            
            // j번째 바구니의 원소를 i번째 바구니에 담는다
            basket[i] = basket[j];
            
            // tmp의 원소를 j번째 바구니에 담는다
            basket[j] = tmp;

            // i를 +1 증가시킨다
            i++;

            // j를 -1 감소시킨다
            j--;
        }                
    }

    // 바구니의 내용을 출력한다
    console.log(basket.join(' '));
});