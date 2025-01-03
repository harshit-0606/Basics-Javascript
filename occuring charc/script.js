let userStr;
do {
    userStr = prompt(`enter a valid string`)
} while (!isNaN(userStr) || userStr.trim() === "");

function charCount(userStr) {
    userStr = userStr.replace(/\s+/g, "").toLowerCase();
    let charCount = new Map();
    for (let char of userStr) {
        //charCount.set(key,value);
        //(charCount.get(char) || 0) SHORTHAND  if char not found it will return undefined  
        //         'h': Count becomes 1 → charCount.set('h', 1)
        // 'e': Count becomes 1 → charCount.set('e', 1)
        // 'l': Count becomes 1 → charCount.set('l', 1)
        // 'l': Count becomes 2 → charCount.set('l', 2)
        // 'o': Count becomes 1 → charCount.set('o', 1)

        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    console.log(Object.fromEntries(charCount));  // Converting Map to an object for easier display
}

charCount(userStr);