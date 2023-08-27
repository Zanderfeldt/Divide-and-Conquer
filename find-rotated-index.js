function findRotatedIndex(arr, num) {
  let pivot = findPivot(arr);
  if (pivot < 0 && num >= arr[0] && num <= arr[pivot - 1]) {
    return binarySearch(arr, num, 0, pivot - 1);
  } else {
    return binarySearch(arr, num, pivot, array.length - 1);
  }
}

function binarySearch(array, num, start, end) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (num < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 0 || arr[0] < arr[arr.length - 1]) return 0;
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else if (arr[low] <= arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1
    }
  }
}

module.exports = findRotatedIndex