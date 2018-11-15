const library = [
  { author: "Cowlishaw, Mike", dewey: "005.133", title: "The REXX Language" },
  { author: "Sams", dewey: "005.133", title: "Teach Yourself C++ In 21 Days" },
  {
    author: "Stroustrup., Bjarne",
    dewey: "005.133",
    title: "The C++ Programming Language"
  },
  {
    author: "Crockford, Douglas",
    dewey: "005.2762",
    title: "JavaScript: The Good Parts"
  },
  {
    author: "Flanagan, David",
    dewey: "005.2762",
    title: "JavaScript: The Definitive Guide"
  },
  {
    author: "Schmidt, Meinhard",
    dewey: "005.44684",
    title: "Windows Vista for Dummies"
  },
  { author: "Zondervan", dewey: "220.52081", title: "NIV Study Bible" },
  {
    author: "Humphries, Russell, Dr.",
    dewey: "231.7652",
    title: "Starlight and Time"
  },
  {
    author: "Jane, Frederick Thomas",
    dewey: "623.82509051",
    title: "Jane's Fighting Ships"
  },
  {
    author: "Norris, Chuck",
    dewey: "796.8092",
    title: "The Official Chuck Norris Fact Book"
  }
];

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);
  array = qSort(array, start, middle); // 0, 3
  array = qSort(array, middle + 1, end);

  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1].title;
  let j = start;

  for (let i = start; i < end - 1; i++) {
    // -1 if array[i] comes before pivot, 0 if equal, 1 if arr[i] comes after
    if (array[i].title.localeCompare(pivot) < 1) {
      // NEED SOME COMPARISON FOR STRINGS
      swap(array, i, j);
      j++;
    }
  }

  swap(array, end - 1, j);
  return j;
}

function swap(arr, a, b) {
  if (a !== b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}

console.log("BEFORE:", library);
console.log("AFTER:", qSort(library));
