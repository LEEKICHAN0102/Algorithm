function solution(n) {
    const str = n.toString();
    const arr = str.split("");
    
    return Number(arr.sort((a,b) => b-a).join(""));
}