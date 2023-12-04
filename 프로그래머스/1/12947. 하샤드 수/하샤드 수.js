function solution(x) {
    let sum = 0;
    const a = x.toString();
    const b = a.split("");
    
    for(let i = 0; i<b.length; i++){
        sum += Number(b[i]);
    }
    
    return x % sum === 0 ? true : false;
}