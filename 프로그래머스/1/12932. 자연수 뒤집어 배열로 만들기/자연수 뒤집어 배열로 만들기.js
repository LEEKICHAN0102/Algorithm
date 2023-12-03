function solution(n) {
    const stackArr =[];
    const str = n.toString();
    const char = str.split("");
    
    for(let i = char.length - 1; i >= 0; i--){
        stackArr.push(Number(char[i]));
    }
    
    return stackArr;
}