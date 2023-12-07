function solution(seoul) {
    for(const [index, item] of seoul.entries()){
        if(item === "Kim"){
            return `김서방은 ${index}에 있다`
        }
    }
}