readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let input = [];
readline.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let count = parseInt(input[0]);
    let answer = 0;

    // count동안 문자가 그룹 단어인지 판별한다
    for (let i = 1; i < count + 1; i++){
        // 이전 문자를 저장한다
        let prev = input[i][0];
        // 그동안 등장한 문자를 저장한다
        let prevArr = [];
        for (let j = 1; j < input[i].length; j++) {
            // 현재 문자가 이전 문자와 같으면 넘어간다
            if (input[i][j] === prev) { continue; }
            
            // 현재 문자가 이전 문자와 다르면
            // 배열에 현재 문자가 있는지 본다
            if (prevArr.indexOf(input[i][j]) > -1) {
                // 배열에 문자가 있으면 이미 등장했던 문자이므로 그룹 단어가 아니다 루프 종료
                answer -= 1;
                break;
            } else {
                // 배열에 문자가 없으면
                // 이전 문자를 배열에 저장하고 현재 문자를 이전 문자로 저장한다
                prevArr.push(prev);
                prev = input[i][j];
            }
        }
        answer += 1;
    }

    // 결과를 출력한다
    console.log(answer);
});