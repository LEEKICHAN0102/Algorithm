function solution(a, b) {
    let sum = 0;
    const arr = [];

    while (a <= b || a >= b) {
        if (a < b) {
            arr.push(a);
            sum += a;
            a++;
        } else if (a > b) {
            arr.push(a);
            sum += a;
            a--;
        } else {
            arr.push(a);
            sum += a;
            break;
        }
    }

    return sum;
}