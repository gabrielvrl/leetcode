function romanToInt(s: string): number {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    
    let counter = 0;
    
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] >= map[s[i+1]]){
            console.log('map[s[i]]', map[s[i]])
            counter += map[s[i]];
        } else if (map[s[i]] < map[s[i+1]]){
            let result = map[s[i+1]] - map[s[i]];
            console.log('result', result);
            counter += result
            i++;
        } else {
            counter += map[s[i]]
        }
    }
    
    return counter;
    
};