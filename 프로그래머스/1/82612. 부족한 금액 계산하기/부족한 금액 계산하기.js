function solution(price, money, count) {
    let sum = 0;
    
    for(let i = 1; i<=count; i++){
        sum+=price*i;
    }
    
    if(money-sum >= 0){
        return 0;
    } else if(money-sum < 0){
        return Math.abs(money-sum);
    }
}