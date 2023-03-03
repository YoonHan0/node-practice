/*
    douzone-math npm 모듈 테스트(모듈 패키지: 로컬 설치)

    로컬 패키지 배포
    $[project-ex02] npm i ../douzone-math
    설치 후 사용
*/

var math = require('douzone-math'); 

console.log(math.PI);
console.log(math.max(100, 200, 300, 400, 500, 105, 140));
console.log(math.min(100, 200, 300, 400, 500, 105, 140));