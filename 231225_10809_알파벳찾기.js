readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    // 단어 입력받기
    let word = line;
    
    // 결과를 저장할 배열
    let answer = [];

    // 알파벳을 순회한다
    for (const alpha of [...'abcdefghijklmnopqrstuvwxyz']) {
        // 단어의 위치를 저장한다. 없으면 -1이 반환된다
        answer.push(word.indexOf(alpha));
    }   

    // 결과 출력
    console.log(answer.join(' '));

    readline.close();
});