// 정규식 메소드

// const str = `
let str = `
010-1234-5678
thesecon@gmail.com
https://www.dmdbapi.com/?apikey=7035c60c&c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`


console.log(
    str.match(/[fox]/g) 
)

console.log(
    str.match(/[0-9]{1,}/g) // (6) ['010', '1234', '5678', '7035', '60', '1234']
)

console.log(
    str.match(/[가-힣]{1,}/g) // ['동해물과', '백두산이', '마르고', '닳도록']
)

console.log(
    str.match(/\w/g) 
)

// 소문자 f로 시작하는 영단어
console.log(
    str.match(/\bf\w{1,}\b/g)  // (2) ['frozen', 'fox']
)

// 숫자 찾기
console.log(
    str.match(/\d{1,}/g)  // (6) ['010', '1234', '5678', '7035', '60', '1234']
)

// 공백 찾기
console.log(
    str.match(/\s/g)  // (19) ['\n', '\n', '\n', '\n', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '\n', '\n', '\n', '\n', ' ', ' ', '\n']
)

const h = `  the hello  world       !

`
console.log(
    h.match(/\s/g)  // (14) [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '\n', '\n']
)

// .replace() : 모든 공백 삭제
console.log(
    h.replace(/\s/g,'') // thehelloworld!
)

const str1 = `
010-1234-5678
thesecon@gmail.com
https://www.dmdbapi.com/?apikey=7035c60c&c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// (?=) | 앞쪽 일치(Lookahead)
// 특저안 기호를 기준 패턴으로 삼아서 그 앞에 있는 내용을 
// 일치시켜 줄 수 있는 앞쪽일치 패턴
console.log(
    str1.match(/.{1,}(?=@)/g)  // ['thesecon']
)

// (?<=) | 뒤쪽 일치(Lookbehind)
// 특저안 기호를 기준 패턴으로 삼아서 그 뒤에 있는 내용을 
// 일치시켜 줄 수 있는 뒤쪽일치 패턴
console.log(
    str1.match(/(?<=@).{1,}/g)  // ['gmail.com']
)






