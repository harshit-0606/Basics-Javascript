let button = document.getElementById("search");

let input = document.getElementById("data");

let msg = document.getElementById("msg");

function check() {
    let num = input.value;
    if(num<0){
      msg.innerText=`${num} is negative`
    }
    else if(num>0){
        msg.innerText=`${num} is positive`
      }
      else{
         msg.innerText=`${num} is neitrher +ve nor -ve`
      }
}
button.addEventListener('click',check);

let a = Math.random()*(3)+1;
a = parseInt(a);
console.log(`Random value between 1 and 10 is ${a};`)
