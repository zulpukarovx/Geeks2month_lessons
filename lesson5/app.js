// filter
var fruits = ['apple', 'pineapple', 'banana', 'orange', 'watermelon']
var filteredFruits = fruits.filter((fruit) => fruit.length > 6)
console.log(filteredFruits)

var users = [
    {name: 'Adam', age: 34},
    {name: 'John', age: 12},
    {name: 'Oliver', age: 23},
    {name: 'ALLen', age: 17},
    {name: 'William', age: 18},
    {name: 'Jack', age: 20},
]

var resultLetter = users.filter((user) => user.name.toLowerCase().includes('l'))
console.log(resultLetter)
var resultAge = users.filter((user) => user.age <= 18)
console.log(resultAge)

//map
var arraySom = [23000, 567000, 47000, 1000000]
var arrayDollars = arraySom.map((num) => num / 89)
var fix = arrayDollars.map((dollar) => Math.round(dollar))
console.log(arrayDollars)
console.log(fix)

//sort
var sortDollars = fix.sort((n1, n2) => n1 - n2)
console.log(sortDollars)

//forEach
var numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => console.log(num * 2))

//find
// var searchUser = prompt('Кого ищете?').trim().toLowerCase()
//
// var users2 = [
//     {name: 'Adam', age: 34, description: 'Меня зовут Адам, мне 34 года, я увлекаюсь ИИ и шахматами'},
//     {name: 'John', age: 12},
//     {name: 'Oliver', age: 23},
//     {name: 'ALLen', age: 17},
//     {name: 'William', age: 18},
//     {name: 'Jack', age: 20},
// ]
// var user = users2.find((user)=>user.name.toLowerCase() === searchUser)
// console.log(user)

//other
var fruits2 = ['apple', 'pineapple', 'banana', 'orange', 'watermelon']
fruits2.push('123')
var fruitsUnshift = fruits2.unshift('345')
console.log(fruitsUnshift)
var element = fruits2.pop()
console.log(element)
var firstElem = fruits2.shift()
console.log(firstElem)
console.log(fruits2)

// console.log(name)
// console.log(hello)
//es6+
var name = 'Ai' //hoisting - всплытие

let hello = 'hi'
hello = 90
const text = 'text'
// text = 56
const array= []
array.push(7)
console.log(array)

//rest - параметры
function getAll(...nums) {
    console.log(nums)
    let sum = nums.reduce((a,b)=> a+=b)
    console.log(sum)
}
getAll(4,5,6)

//spread-operators
const numbers1 = [1,2,3,4,5,6,7,8,9,80,90,78,67,56,45,34]
const [n0, n2, n3, n4, n5, n6, n7, n8, n9, ...others] = numbers1
console.log(n0, n2, n3, n4, n5, n6, n7, n8, n9, others)

const num1 = [1,2,3]
const num2 = [1,2,3]
const allNums = [...num1, ...num2]
console.log(allNums)

function convertUSD(usd, ...som){
    console.log(usd, som)
    return som.map((i) => i /usd)
}

console.log(convertUSD(89, 5678900000000, 89000000))