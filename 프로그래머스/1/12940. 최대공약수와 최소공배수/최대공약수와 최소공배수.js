function solution(n, m) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);

    const greatestCommonDivisor = gcd(n, m);
    const leastCommonMultiple = lcm(n, m);

    return [greatestCommonDivisor, leastCommonMultiple];
}
