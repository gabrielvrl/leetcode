function missingNumber(nums: number[]): number {
    if(nums.length === 0) return 0
    
    nums.sort((a,b) => a - b);
    
    let lastI;
    
    for(let i = 0; i < nums.length; i++){
        console.log(nums[i], i)
        lastI = i;
        if(nums[i] !== i){
            return i
        }
    }
    
    return lastI+1
};