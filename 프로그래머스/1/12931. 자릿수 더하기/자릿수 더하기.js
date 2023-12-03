function solution(n) {
    let sum = 0;
    const str = n.toString();
    const char = str.split("");
    
    for(const item of char){
        sum+=Number(item);
    }
    
    return sum
}