function solution(A,B){
    let sum = 0;
   const aArr = A.sort((a, b) => a - b); // 오름차순 정렬
    const bArr = B.sort((a, b) => b - a); // 내림차순 정렬
    
    for(let i=0; i<A.length; i++){
        sum += aArr[i] * bArr[i];
    }
    
    return sum;
}