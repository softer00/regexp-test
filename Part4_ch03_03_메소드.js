// 정규식 메소드

// const str = `
let str = `
010-1234-5678
thesecon@gmail.com
https://www.dmdbapi.com/?apikey=7035c60c&c&s=frozen
The quick brown fox jumps over the lazy dog.
`

// re.test() : 정규식 일치여부 반환
const regexp = /fox/gi
console.log(regexp.test(str)) // true

// re.replace() : 일치하는 문자열을 대체하고 대체된 문자열(String) 반환
console.log(str.replace(regexp, 'AAA')) 
// 010-1234-5678
// thesecon@gmail.com
// https://www.dmdbapi.com/?apikey=7035c60c&c&s=frozen
// The quick brown AAA jumps over the lazy dog.

str = str.replace(regexp, 'AAA')
console.log(str)
// 010-1234-5678
// thesecon@gmail.com
// https://www.dmdbapi.com/?apikey=7035c60c&c&s=frozen
// The quick brown AAA jumps over the lazy dog.

