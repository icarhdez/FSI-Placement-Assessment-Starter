// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Carmen Hernández" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type

let gb = 0
let cc = 0
let sugar = 0
let total = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
let gbPlusBtn = document.querySelector('#add-gb')
let gbMinusBtn= document.querySelector('#minus-gb')
let ccPlusBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')
let sugarPlusBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')
let Totalcookies= document.querySelector('#qty-total')
let totalgb =document.querySelector('#qty-gb')
let totalcc = document.querySelector('#qty-cc')
let totalsugar = document.querySelector('#qty-sugar')

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
    gb++
    totalgb.textContent=`${gb}`
    Totalcookies.textContent= + `${gb}`
})

gbMinusBtn.addEventListener('click', function(e) {
    gb--
    totalgb.textContent=`${gb}`
    Totalcookies.textContent= - `${gb}`
})

ccPlusBtn.addEventListener('click', function(e) {
    cc++
    totalcc.textContent=`${cc}`
    Totalcookies.textContent= `${cc}`
})

ccMinusBtn.addEventListener('click', function(e) {
    cc--
    totalcc.textContent=`${cc}`
})

sugarPlusBtn.addEventListener('click', function(e) {
    sugar++
    totalsugar.textContent=`${sugar}`
})

sugarMinusBtn.addEventListener('click', function(e) {
    sugar--
    totalsugar.textContent=`${sugar}`
})


// Code to update name display
credit.textContent = `Created by ${yourName}`