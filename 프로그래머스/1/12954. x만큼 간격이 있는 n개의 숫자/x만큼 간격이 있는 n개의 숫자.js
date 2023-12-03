function solution(x, n) {
    const arr = [];
    
    for(let i = 1; i<=n; i += 1){
        arr.push(x * i);
    }
    
    return arr;
}