// 정규식 메소드

// const str = `
let str = `
010-1234-5678
thesecon@gmail.com
https://www.dmdbapi.com/?apikey=7035c60c&c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
d`

const regexp = /the/gi
console.log(str.match(regexp))  // (3) ['the', 'The', 'the']

// 마침표 검색
console.log(str.match(/\./gi))

// 마침표가 있는 부분을 검색
console.log(str.match(/\.$/gim))

// 모든 것을 검색
console.log(
    str.match(/\.$/g)
)

// multiline, d로 끝나는 단어
console.log(
    str.match(/d$/gm)
)

// multiline, t로 시작하는 단어
console.log(
    str.match(/^t/gim)
)



