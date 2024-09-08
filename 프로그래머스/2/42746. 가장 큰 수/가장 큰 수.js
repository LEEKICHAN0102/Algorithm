function solution(numbers) {
    const sorted = numbers.map(String).sort((a, b) => (b + a) - (a + b));
    
    // 0 만 있을 때
    if (sorted[0] === '0') {
        return '0';
    }
    
    return sorted.join('');
}