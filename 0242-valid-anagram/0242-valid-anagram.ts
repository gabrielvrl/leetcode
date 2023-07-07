function isAnagram(s: string, t: string): boolean {
    const sMap: {
        [key: string]: number;
    } = {};
    
    const tMap: {
        [key: string]: number;
    } = {};
    
    let sMapLength = 0;
    let tMapLength = 0;
    
    
    for(let i = 0; i < s.length; i++){
        if(sMap[s[i]]){
            sMap[s[i]] += 1
        } else {
            sMap[s[i]] = 1
            sMapLength++;
        }
    }
    
    for(let i = 0; i < t.length; i++){
        if(tMap[t[i]]){
            tMap[t[i]] += 1
        } else {
            tMap[t[i]] = 1
            tMapLength++;
        }
    }
    
    
    console.log(sMap)
    console.log(tMap)
    
    let result = false
    
    let biggerMap = sMapLength >= tMapLength ? sMap : tMap
    console.log(biggerMap)
    
    for(let key in biggerMap){
        console.log('sMap[key]', sMap[key])
        console.log('tMap[key]', tMap[key])
        if(sMap[key] === tMap[key]) {
            result = true;
        } else {
            console.log('else')
            return false;
        }
    }
    
    
    return result;
        
        
};