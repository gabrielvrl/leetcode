function firstUniqChar(s: string): number {
    const map: { [key: string]: number } = {};


    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(map[char]){
            map[char]++;
        } else{
            map[char] = 1
        }
    }

    for(let i = 0; i < s.length; i++){
        let char = s[i]
        if(map[char] === 1){
            return i
        }
    }

    return -1;
};