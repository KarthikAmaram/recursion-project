const test_array  = [3, 2, 1, 13, 8, 5, 0, 1];
const test_array2 = [105, 79, 100, 110];

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    let halfway = Math.floor(array.length / 2)
    let leftArray = array.slice(0, halfway);
    let rightArray = array.slice(halfway);
    let left = mergeSort(leftArray);
    let right = mergeSort(rightArray);
    
    return merge(left, right);

}

function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex])
        leftIndex++;
        } else {
        resultArray.push(right[rightIndex])
        rightIndex++;
        }
  }
  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(mergeSort(test_array2));