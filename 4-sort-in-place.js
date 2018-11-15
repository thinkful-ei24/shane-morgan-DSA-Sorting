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

function sortInPlace(arr) {
  console.log('Before: ', arr)
  for (let i = 0; i < arr.length; i++) {

    let rand = Math.ceil(Math.random() * arr.length) - 1;
    swap(arr, i, rand);
  }

  return arr;
}

function swap(arr, a, b) {
  if(a !== b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}

//console.log('Sorted: ', sortInPlace(data));