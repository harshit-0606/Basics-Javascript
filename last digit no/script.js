let num1 = prompt("enter fisrt number");
let num2 = prompt("enter second number");
let num3 = prompt("enter third number");

const checkLastDigit = (num1, num2, num3) => {
    let a = num1 % 10;
    let b = num2 % 10;
    let c = num3 % 10;

    if (a===b && b===c) {
        alert(`${num1} ,${num2} ,${num3} having same last digit`)
    }
    else{
        alert(`${num1} ,${num2} ,${num3} NOT having the same last digit`)
    }
    return;
}

function print() {
    checkLastDigit(num1, num2, num3);
}
print();