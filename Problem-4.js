function countMultiples(arr) {
  const counts = {};
  for (let i = 1; i <= 9; i++) {
    counts[i] = arr.filter(x => x % i === 0).length;
  }
  return counts;
}


const input = [1,2,8,9,12,46,76,82,15,20,30];
console.log(countMultiples(input));

