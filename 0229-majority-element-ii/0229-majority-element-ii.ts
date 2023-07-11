function majorityElement(nums: number[]): number[] {
    let map: {
        [key: number]: number
    } = {};

    let result: number[] = [];
    let target = nums.length / 3;
    
    
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    
    Object.keys(map).forEach((key) => {
        if(map[key] > target){
            result.push(Number(key))
        }
    })
    
    return result;
};