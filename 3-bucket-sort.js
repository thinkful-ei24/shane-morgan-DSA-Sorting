/*

Write an O(n) algorithm to sort an arr of integers, where you know in advance what the lowest and highest values are.

15 buckets
min 15
max 120

evenly distribute over range of 105
each bucket has a range of 7 if there are 15 buckets
15 => 0
17 => 0
24 => 1
117 => 14

Math.floor((num - min) / bucketRange)
^ doesn't work for last value, since this will come out to arr.length,
but accounting for that should make it work!

105 / 7 => 15


5 buckets no matter what since buckets count = arr.length
5-6, 7-8, 9-10, 11-12

(max-min) / arr.length = range of bucket

*/

// bucketSort
function bucketSort(arr, min, max) {
  const numOfBuckets = arr.length;
  const rangeOfEachBucket = Math.ceil((max - min) / numOfBuckets);

  let buckets = [];

  for (let i = 0; i < numOfBuckets; i++) {
    const correctBucket = Math.floor((arr[i] - min) / rangeOfEachBucket);
    buckets[correctBucket] === undefined ? (buckets[correctBucket] = []) : null;
    buckets[correctBucket].push(arr[i]);
  }

  let outputIndex = 0;
  for (const bucket of buckets) {
    if (bucket !== undefined) {
      // PLACEHOLDER FOR BUBBLE SORT OR *INSERTION SORT*
      bucket.sort((num1, num2) => num1 - num2);
      for (const num of bucket) {
        arr[outputIndex++] = num;
      }
    }
  }

  return arr;
}

const data = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26
];

const data2 = [55, 50, 56, 45, 11, 99, 77];
// min: 11, max: 99, range: 88, each bucket has a range of 13 values

console.log("EXPECTED:", data2.sort((a, b) => a - b));
console.log("ACTUAL:", bucketSort(data2, 11, 99));
