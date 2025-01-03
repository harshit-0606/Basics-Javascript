let button = document.querySelector("button")
let inputNumber = document.querySelector("input")
let msg = document.querySelector("h1")
// console.log(msg);
const fraction = 0.6125

const convert = () => {
    let kilometers=inputNumber.value;
kilometers=parseFloat(kilometers);
    let miles = kilometers * fraction
    msg.innerText=`${miles} Miles`; 
    // console.log(miles);
    // return miles;
}

// button.addEventListener('click',() =>{
//     let miles = convert();
//     msg.innerText=`${miles} Miles`; 
// }) ;

button.addEventListener('click',convert);