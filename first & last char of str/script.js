let userStr;
do {
    userStr = prompt(`enter a valid string`)
} while (!isNaN(userStr) || userStr.trim() === "");


const check = (userStr) => {
    
    for (let i = 0; i < userStr.length; i++) {
        let start = userStr.startsWith('h')
        let end = userStr.endsWith('a')
        if(start == true && end == true){
            return true;
        }
        else{
            return false;
        }
    }
    
}

function print(){
    if(check(userStr)){
        alert(`${userStr} starts with h ends with a`)
    }
    else{
        alert(`test fails`)
    }
}

print()

