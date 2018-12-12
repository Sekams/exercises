const solution = (A, K) => {
  for (let index = 1; index <= K; index++) {
    A.unshift(A.pop());
  }
  return A;
}

console.log(solution([3, 8, 9, 7, 6], 1));
