readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    // 년도 입력받기
    const year = parseInt(line);

    // 윤년인지 판단하기
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 > 0)) {
        // 윤년인 경우
        // 연도가 400의 배수일 때
        // 연도가 4의 배수이면서 100의 배수가 아닐 때
        console.log(1);
    } else {
        // 윤년이 아닌 경우
        console.log(0);
    }

    // 무한 입력 방지
    readline.close();
});