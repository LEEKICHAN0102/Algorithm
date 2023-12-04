function solution(s) {
    const jaden = s.split(" ").map((word) => {
        const firstChar = word.charAt(0).toUpperCase();
        const restOfString = word.slice(1).toLowerCase();
        return firstChar + restOfString;
    });
    
    return jaden.join(" ")
}
