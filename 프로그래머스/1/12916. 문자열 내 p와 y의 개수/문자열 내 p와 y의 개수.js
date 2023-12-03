function solution(s){
    let pCount = 0;
    let yCount = 0;
    
    const arr = s.split("");
    
    for(const item of arr) {
        if(item === "p" || item === "P"){
            pCount++;
        } else if (item === "y" || item === "Y"){
            yCount++;
        }
    }
    
    if(pCount === yCount){
        return true
    } else
        return false
}