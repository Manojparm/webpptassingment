function majorityElement(nums) {
    let majorityCandidate = null;
    let count = 0;
  
    for (const num of nums) {
      if (count === 0) {
        majorityCandidate = num;
        count = 1;
      } else if (majorityCandidate === num) {
        count++;
      } else {
        count--;
      }
    }
  
    // At this point, majorityCandidate should hold the majority element, but we need to verify.
    count = 0;
    for (const num of nums) {
      if (num === majorityCandidate) {
        count++;
      }
    }
  
    if (count > nums.length / 2) {
      return majorityCandidate;
    } else {
      return -1; // No majority element found
    }
  }
  
  // Test case
  const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
  const result = majorityElement(nums);
  console.log(result); // Output: 4
  