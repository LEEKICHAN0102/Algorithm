function solution(s) {
    const length = s.length;
    
    if(length % 2 !== 0){
        return s[Math.floor(length / 2)]
    } else {
        return s.slice([Math.floor(length/2)] - 1, [Math.floor(length/2) +1]);
    }
}