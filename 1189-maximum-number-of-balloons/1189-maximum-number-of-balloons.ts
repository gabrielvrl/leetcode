function maxNumberOfBalloons(text: string): number {
    const hashMap = {}
    let result = 0;
    
    for(let i = 0; i < text.length; i++) {
        const element = text[i]
        if(hashMap[element] === undefined) {
            hashMap[element] = 1
        } else {
            hashMap[element]++;
        }
    }

    const maximumPossibleBallons = hashMap["b"]
    let ballonCondition;
    
    for(let i = 0; i < maximumPossibleBallons; i++){
        ballonCondition = hashMap["b"] >= 1 && hashMap["a"] >= 1 && hashMap["l"] >= 2 && hashMap["o"] >= 2 && hashMap["n"] >= 1
        if(ballonCondition){
            result++;
            hashMap["b"] = hashMap["b"] - 1
            hashMap["a"] = hashMap["a"] - 1
            hashMap["l"] = hashMap["l"] - 2
            hashMap["o"] = hashMap["o"] - 2
            hashMap["n"] = hashMap["n"] - 1
        }
    }
    
    return result
};
    
    
    
    
    
    
    
    
    
    
    
    