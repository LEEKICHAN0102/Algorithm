function solution(s) {
    const sArr = s.split(" ");
    const result = [];

    for (let i = 0; i < sArr.length; i++) {
        const sSArr = sArr[i].split("");
        const stackArr = [];

        for (let j = 0; j < sSArr.length; j++) {
            if (j % 2 === 0) {
                stackArr.push(sSArr[j].toUpperCase());
            } else {
                stackArr.push(sSArr[j].toLowerCase());
            }
        }
        result.push(stackArr.join(""));
    }
    return result.join(" ");
}