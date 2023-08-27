function sortedFrequency(arr, num) {
  // Initialize low and high pointers for binary search
  let low = 0;
  let high = arr.length - 1;
  
  // Initialize variables to store first and last occurrences
  let firstIndex = -1;
  let lastIndex = -1;

  // First binary search to find the first occurrence of 'num'
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === num) {
      // Update firstIndex and continue searching to the left
      firstIndex = mid;
      high = mid - 1;
    } else if (arr[mid] < num) {
      // If 'num' is greater, search the right half
      low = mid + 1;
    } else {
      // If 'num' is smaller, search the left half
      high = mid - 1;
    }
  }

  // Reset low and high pointers for the second binary search
  low = 0;
  high = arr.length - 1;

  // Second binary search to find the last occurrence of 'num'
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === num) {
      // Update lastIndex and continue searching to the right
      lastIndex = mid;
      low = mid + 1;
    } else if (arr[mid] < num) {
      // If 'num' is greater, search the right half
      low = mid + 1;
    } else {
      // If 'num' is smaller, search the left half
      high = mid - 1;
    }
  }

  // If 'firstIndex' is still -1, 'num' is not found in the array
  if (firstIndex === -1) {
    return -1;
  }

  // Calculate and return the frequency
  return lastIndex - firstIndex + 1;
}




module.exports = sortedFrequency