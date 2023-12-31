function intersect(nums1: number[], nums2: number[]): number[] {
    
    nums1.sort((a,b) => a -b);
    nums2.sort((a,b) => a -b);
    
    let i = 0;
    let j = 0;
    
    let result:number[] = []
    
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            i++;
        } else if(nums1[i] > nums2[j]){
            j++;
        } else {
            result.push(nums1[i])
            j++;
            i++;
        }       
    }
    
    return result;
    
    
};