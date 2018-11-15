
const data = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5];

function qSort(data) {

}

function mSort(data) {
  if(data.length <= 1) {
    return data;
  }

  let middle = Math.floor(data.length / 2);
  let left = mSort(data.slice(0, middle));
  let right = mSort(data.slice(middle, data.length));

  return merge(left, right, data);
}

function merge(left, right, data) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      data[outputIndex++] = left[leftIndex++];
    } else {
      data[outputIndex++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex; i < left.length; i++) {
    data[outputIndex++] = left[leftIndex++];
  }
  for (let i = rightIndex; i < right.length; i++) {
    data[outputIndex++] = right[rightIndex++];
  }
  return data;
}

console.log(mSort(data));
