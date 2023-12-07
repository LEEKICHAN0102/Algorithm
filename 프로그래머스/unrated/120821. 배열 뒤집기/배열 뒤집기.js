function solution(num_list) {
    const reArr = [];
    for(let i = num_list.length-1; i>=0; i--){
        reArr.push(num_list[i]);
    }
    
    return reArr;
}