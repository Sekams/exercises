const solution = (N) => {
  const binary = (N >>> 0).toString(2);
  let maxGap = 0;
  let consecutives = binary.match(/([0-1])\1*/g) || [];
  const length = consecutives.length;
  for (let index = 0; index < length; index++) {
    if (consecutives[index].charAt(0) === '0' && consecutives[index].length > maxGap && index < (length - 1)) {
      maxGap = consecutives[index].length;
    }
  }
  return maxGap;
}
