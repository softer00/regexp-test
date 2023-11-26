// 정규식 메소드

// const str = `
let str = `
010-1234-5678
thesecon@gmail.com
https://www.dmdbapi.com/?apikey=7035c60c&c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234`

// 배열 데이터
console.log(
    str.match(/http/g)
)

// 배열 데이터
console.log(
    str.match(/h..p/g)
)

// fox나 dog 중 먼저 찾아지는 것을 반환
console.log(
    str.match(/fox|dog/)
)

// fox나 dog를 전부 찾아라.
console.log(
    str.match(/fox|dog/g)   // (2) ['fox', 'dog']
)

// ? 앞의 글자가 없을 수도, 있을 수는 단어를 일치시킨다.
console.log(
    str.match(/https?/g) 
)

// {} 연속 반복 일치 
console.log(
    str.match(/d{2}/g) 
)

// {2, } 2개 이상 연속 일치 
console.log(
    str.match(/d{2,}/g) 
)

// \b : boundary = 문자가 2개이상 3개이하인 문자 일치
console.log(
    str.match(/\b\w{2,3}\b/g) 
)