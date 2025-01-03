// fahrenheit = celsius*1.8 +32
let button =document.getElementById("search");
let input = document.getElementById("input");
let msg = document.getElementById("msg");


function tempConvert() {
    let celsius = input.value;
    celsius = parseFloat(celsius);
   let fahrenheit = celsius * 1.8 + 32;
   msg.innerText = ` ${celsius} celsius =  ${fahrenheit} fahrenheit` ;
}
  
button.addEventListener('click',tempConvert);
