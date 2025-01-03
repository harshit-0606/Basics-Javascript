let number = parseInt(prompt("enter a number"));

function getvalue(number){
    let fact =1;
    for (let i = 1; i<= number; i++) {
        fact =fact*i ;
        console.log(fact);
     }
      return fact;
}

const  factorial= () => {
    let ans = getvalue(number);
 ans = alert(`factorial of ${number} is ${ans}`)
}
factorial();