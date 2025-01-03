let num = parseFloat(prompt("enter a number"));

const printTable = (num) => {
    let value;
     for (let i = 1; i <=10; i++) {
        value = num*i;
        console.log(`${num} * ${i} = ${value}`);
    }
}

function print(){
       printTable(num);
}
 print();