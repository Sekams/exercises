const solution = (A, K) => {
  for (let index = 1; index <= K; index++) {
    A.unshift(A.pop());
  }
  return A;
}
