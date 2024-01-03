readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.on('line', (line) => {
    // 1을 저장하고 시작한다
    let answer = 1;
    let i = 0;
    while (i < line.length - 1 - i) {
        // i번이 length - 1 - i 보다 크거나 같은 경우 루프를 종료한다
        // 단어의 i번과 length - 1 -i번을 비교한다
        if (line[i] === line[line.length - 1 - i]) {
            // 같으면 다음 인덱스로 넘어간다
            i++;
        } else {
            // 다르면 0을 저장하고 루프를 종료한다
            answer = 0;
            break;
        }
    }

    // 결과를 출력한다
    console.log(answer);
    readline.close();
});