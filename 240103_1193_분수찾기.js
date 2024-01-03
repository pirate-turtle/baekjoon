// 참고: https://velog.io/@wltnrms0629/JS%EB%B0%B1%EC%A4%80-1193%EB%B2%88-%EB%B6%84%EC%88%98%EC%B0%BE%EA%B8%B0

readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', (line) => {
  let x = parseInt(line);
  let groupCount = 0;
  
  while (x > 0) {
    groupCount++;
    x = x - groupCount;
  }

  const asc = Array.from({length: groupCount}, (_, i) => i+1);
  const desc = Array.from({length: groupCount}, (_, i) => groupCount - i);

  if (groupCount % 2 === 0) {
    console.log(`${asc[x+groupCount-1]}/${desc[x+groupCount-1]}`);    
  } else {
    console.log(`${desc[x+groupCount-1]}/${asc[x+groupCount-1]}`);
  }
});