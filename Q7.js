function countInversions(arr) {
    let inversions = 0;
  
    function merge(arr, left, mid, right) {
      const leftArr = arr.slice(left, mid + 1);
      const rightArr = arr.slice(mid + 1, right + 1);
      let i = 0;
      let j = 0;
      let k = left;
  
      while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
        } else {
          arr[k] = rightArr[j];
          j++;
          inversions += mid + 1 - (left + i);
        }
        k++;
      }
  
      while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i++;
        k++;
      }
  
      while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
      }
    }
  
    function mergeSort(arr, left, right) {
      if (left >= right) return;
  
      const mid = Math.floor((left + right) / 2);
      mergeSort(arr, left, mid);
      mergeSort(arr, mid + 1, right);
      merge(arr, left, mid, right);
    }
  
    mergeSort(arr, 0, arr.length - 1);
  
    return inversions;
  }
  
  // Test case
  const arr = [2, 4, 1, 3, 5];
  const result = countInversions(arr);
  console.log(result); // Output: 3
  