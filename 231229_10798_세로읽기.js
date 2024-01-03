readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // 다섯개의 단어를 배열에 저장합니다
    let words = [];
    for (let i = 0; i < 5 ; i++) {        
        words.push([...input[i]]);
    }

    // 읽은 글자를 저장할 변수
    let answer = '';

    // 한 열씩 글자를 세로로 읽습니다
    for (let j = 0; j < 15; j++) {
        for (let i = 0; i < 5; i++){
            // 행의 길이가 짧으면 넘어갑니다
            if (words[i].length - 1 < j) { continue; }
            
            // 행에 글자가 있으면 저장합니다
            answer += words[i][j];
        }
    }

    // 읽은 글자들을 출력합니다
    console.log(answer);
})