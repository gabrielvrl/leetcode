function removeElement(nums: number[], val: number): number {
    console.log('val', val)
    console.log('nums', nums)
    
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    console.log(nums)
    
    console.log('k', k)
    return k;
};