function oddSeriesCeiling(a) {
  const result = [];
  const maxOdd = a % 2 === 1 ? a : a - 1;
  for (let num = 1; num <= maxOdd; num += 2) {
    result.push(num);
  }
  return result;
}

console.log(oddSeriesCeiling(4)); 
console.log(oddSeriesCeiling(5)); 
