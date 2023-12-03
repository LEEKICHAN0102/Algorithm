function solution(n) {
    let counter = 0;
    if (n > 0) {
        while (n !== 1) {
            if (n % 2 === 0) {                                      
                n = n / 2; 
                counter++;
                if(counter>500) {
                    return -1
                }
            } else if (n % 2 !== 0) {
                n = (n * 3) + 1;
                counter++;
                if(counter>500) {
                    return -1
                }
            }
        }
        return counter;
    }
}