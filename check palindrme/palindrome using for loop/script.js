let userstr;

do {
    userstr = prompt(`Type your string`);
    // it ensures that input ois valid string not a number or a white empty space
} while (!isNaN(userstr) || userstr.trim() === "")

const check = (userstr) => {
    userstr = userstr.replace(/\s+/g, "").toLowerCase();
    console.log(userstr);

    for (let index = 0; index < userstr.length; index++) {
        if (userstr[index] != userstr[userstr.length - 1 - index]) {
            console.log(`${userstr[index] != userstr[userstr.length - 1 - index]}`);
            break;
        }
        else{
            return true;
        }
    }
}

function isPalindrome() {
    if (check(userstr)) {
        alert(`${userstr} it is a palindrome`)
    }
   else{
        alert(`${userstr} it is NOT a palindrome`)
    }
}

isPalindrome();




