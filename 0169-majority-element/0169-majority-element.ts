function majorityElement(nums: number[]): number {
    let map: {
        [key: number]: number
    } = {};
    
    let majorityNumber = 0;
    let majorityNumberKey = 0;
    
    
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    
    Object.keys(map).forEach((key) => {
        if(map[key] > majorityNumber){
            console.log(map[key])
            majorityNumber = map[key]
            majorityNumberKey = parseInt(key)
        }
    })
    
    return majorityNumberKey
};