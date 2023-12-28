function getConcatenation(nums: number[]): number[] {
    const originalLength = nums.length
    for(let i = 0; i < originalLength; i++) {
        console.log(i, nums[i])
        nums.push(nums[i])
    }
    
    return nums
};