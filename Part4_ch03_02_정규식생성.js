const str = `
010-1234-5678
thesecon@gmail.com
https://www.dmdbapi.com/?apikey=7035c60c&c&s=frozen
The quick brown fox jumps over the lazy dog.
`

//======== 생성자 함수 방식 ==============//
// 첫번째 만나는 search
const regexp = new RegExp('the', '')
console.log(str.match(regexp))

// 전체 문장 선택 : 'g' flag
const regexp1 = new RegExp('the', 'g')
console.log(str.match(regexp1))

// 대소문자 무시 : 'i' flag
const regexp2 = new RegExp('the', 'gi')
console.log(str.match(regexp2))

//======== 리터럴 방식 ==============//

const re = /the/
console.log(str.match(re))

const re1 = /the/g
console.log(str.match(re1))

const re2 = /the/gi
console.log(str.match(re2))