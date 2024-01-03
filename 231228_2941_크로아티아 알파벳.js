readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    let croatea = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

    let i = 0;
    let answer = 0;
    

    // 인덱스가 글자 길이를 초과하지 않는 동안
    while (i < line.length) {
        // 2글자 확인해서 크로아티아 배열에 있는 문자인지 확인
        if (i+1 < line.length) {
            if (croatea.indexOf(line.slice(i, i+2)) > -1) {
                // 크로아티아 배열에 있으면
                // 다음 인덱스 저장 (i+2)
                i += 2;
                // 알파벳 카운트 + 1
                answer += 1;
                continue;
            }
        }
        
        // 3글자 확인해서 크로아티아 배열에 있는 문자인지 확인
        if (i+2 < line.length) {
            if (croatea.indexOf(line.slice(i, i+3)) > -1) {
                // 크로아티아 배열에 있으면
                // 다음 인덱스 저장 (i+3)
                i += 3;
                // 알파벳 카운트 + 1
                answer += 1;
                continue;
            }
        }

        // 크로아티아 배열에 없으면
        // 다음 인덱스 저장 (i+1)
        i++;
        // 알파벳 카운트 + 1
        answer += 1;        
    }

    // 결과 출력
    console.log(answer);
})