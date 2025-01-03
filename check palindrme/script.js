let userStr;

do {
    userStr = prompt("type a string or sentence");
} while (!isNaN(userStr));

console.log("You entered a valid string:", userStr);

const checkPalindrome = (userStr) => {
    console.log(userStr);

    let updateStr = userStr.replace(/\s+/g, "").toLowerCase();
    console.log(updateStr);

    let strArray = updateStr.split('').reverse().join('');
    console.log(strArray);

    let result = strArray === updateStr;
    return result;
}

function isPalindrome() {
    if (checkPalindrome(userStr)) {
        alert(`${userStr} it is a palindrome`)
    }
    else {
        alert(`sorry! NOT a palindrome`)
    }
}

isPalindrome();


