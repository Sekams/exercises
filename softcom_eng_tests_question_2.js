const solution = (A, K) => {
  for (let index = 0; index <= K; index++) {
    if (index > 0) {
      A.unshift(A[A.length - 1]);
      A.pop();
    }
  }
  return A;
}
