const solution = (A, N) => {
  if (A.length != N || N < 0 || N > 100000) return;
  const distinct = [];
  for (let i = 0; i < A.length; i++){
    if (!distinct.includes(A[i])) {
      distinct.push(A[i]);
    }
  }
  return distinct.length;
}
