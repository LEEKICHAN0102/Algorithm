function solution(arr, divisor) {
    const filteredArr = arr.filter((i) => i % divisor === 0).sort((a, b) => a - b);
    return filteredArr.length > 0 ? filteredArr : [-1];
}