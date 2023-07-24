function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return left;
  }
  

  const nums1 = [1, 3, 5, 6];
  const target1 = 5;
  console.log(searchInsert(nums1, target1)); 
  
  const nums2 = [1, 3, 5, 6];
  const target2 = 7;
  console.log(searchInsert(nums2, target2)); 
  