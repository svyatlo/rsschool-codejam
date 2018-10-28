function sumOfOther(arr) {
    return arr.map(el => arr.reduce((acc, curr) => acc + curr) - el);
  }