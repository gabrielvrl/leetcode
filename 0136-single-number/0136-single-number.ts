function singleNumber(nums: number[]): number {
    let map: {
      [key: number]: number
    } = {}
    
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    
    console.log('map', map)
    
    let result = 0;
    Object.keys(map).forEach((key) => {
        if (map[key] === 1) {
            result = parseInt(key);
            return;
        }
    });

    console.log('result', result);

    return result;
};