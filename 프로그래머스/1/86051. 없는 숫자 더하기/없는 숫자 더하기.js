function solution(numbers) {
    let result = 0;
    const sortArr = numbers.sort((a,b) => a-b);
    
     for (let i = 0; i <= 9; i++) {
        if (sortArr.indexOf(i) === -1) {
            result += i;
        }
    }

    return result;
}