function solution(arr){    
    let result = arr.filter((element, index) => element !== arr[index - 1]);
    return result;
}