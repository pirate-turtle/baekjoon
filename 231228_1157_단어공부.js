readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,    
});

readline.on('line', (line) => {
    // 단어 등장 횟수 세기
    let counter = [...line.toUpperCase()].reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    },{})
    
    // 가장 많이 사용된 알파벳 구하기
    let answer = '';
    let max = 0;
    
    // 객체를 순회하면서 최대 빈도와 알파벳 저장하기
    for (const a in counter) {
        if (counter[a] > max) {
            // 이전 값보다 더 큰 숫자가 등장하면
            // 최대 빈도와 알파벳 교체하기
            max = counter[a];
            answer = a;
        } else if (counter[a] === max) {
            // 이전 값과 같은 숫자가 등장하면
            // 알파벳 대신 ? 저장하기
            answer = '?';
        }

    }


    // 결과 출력하기
    console.log(answer);
    readline.close();
});