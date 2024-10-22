
const num = 4355
console.log(typeof num); // number
nu= num.toString()  // convert to string
console.log(typeof(nu)) 

const num1 = new Number(123.896 )
console.log(typeof(num1)) // object


const z = Number(100)
console.log(typeof z)


//================ toFixed used to round up to decimal number =====================
//console.log(num1.toFixed(2))

//================ toPrecision move the decimal point from extreme left of number by value that we pass  =====================
console.log(num1.toPrecision(4))

//====================== Math ==================================
console.log(Math.random())

// in js random function doesn't take the range so following method use========

const min = 10
const max = 20

console.log(Math.round(Math.random() * (max-min + 1) + min ))

